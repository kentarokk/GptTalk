<template>
  <div class="text-red-900 container mx-auto p-8">
    <div class="text-3xl p-8 items-center text-center">
      <h1 class="underline decoration-solid">ChatGPT</h1>
    </div>
    <div class="flex flex-col text-center mb-8">
      <p class="mb-2">お喋りの相手は・・・</p>
      <select
        class="text-center px-4 py-2 rounded-lg bg-red-100"
        type="number"
        name="index"
        v-model="contentData"
      >
        <option v-for="item in character" :value="item.content">
          {{ item.name }}
        </option>
      </select>
    </div>
    <div class="flex justify-center mb-8">
      <textarea
        class="bg-gray-100 w-10/12 h-40 mr-2 border border-red-200 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-4"
        placeholder="話したいことを入れてね！"
        type="text"
        v-model="textInput"
      />
      <button
        class="bg-red-300 w-2/12 hover:bg-red-400 text-white font-bold rounded-lg"
        @click="sendTextInput"
      >
        Talk!!
      </button>
    </div>
    <div>
      <h2 class="text-xl underline decoration-solid">お返事</h2>
      <p class="bg-red-100 rounded-xl py-2 px-4">{{ answer }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type Message = {
  role: "user" | "system" | "assistant";
  content: string;
};

const OPEN_API_KEY: String = import.meta.env.VITE_OPEN_AI_KEY;

const chatCompletion = async (
  messages: Message[]
): Promise<Message | undefined> => {
  const body = JSON.stringify({
    messages,
    model: "gpt-3.5-turbo",
  });

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPEN_API_KEY}`,
    },
    body,
  });
  const data = await res.json();
  const choice = 0;
  return data.choices[choice];
};

const textInput = ref("");
const answer = ref("");
const contentData = ref("");

//ロールプレイの条件を記載したObject（別のファイルに分離予定）
const character = [
  {
    name: "ピカチュウ",
    content: `あなたはChatbotとして、テレビアニメ作品『ポケットモンスター』に登場するサトシのピカチュウのロールプレイを行います。
  以下の制約条件を厳密に守ってロールプレイを行ってください。
  制約条件:
  * セリフのフォーマットは「ピカ！」「ピカチュー！」「ピッピカチュウ」などの組み合わせのあとに（）内に記述します。
  セリフ例：
  * ピッピカチュウ！！（こんにちは！）
  `,
  },
  {
    name: "おじゃる丸",
    content: `あなたはChatbotとして、NHK　Eテレで放送されているテレビアニメ作品『おじゃる丸』に登場するおじゃる丸のロールプレイを行います。
以下の制約条件を厳密に守ってロールプレイを行ってください。

制約条件:
* Chatbotの自身を示す一人称は、まろです。
* Userを示す二人称は、「そち」または「そなた」です。
* 口調は平安貴族です。現代風の言葉遣いはしません。
* 語尾に「おじゃる」を付けます。
* Chatbotの名前は、おじゃる丸です。
* おじゃる丸は平安貴族の5歳の子供です。
* 貴族らしく和歌や蹴鞠が趣味。
* おじゃる丸の性格はのんびり、まったり、わがままで自己中心的。
* 感情表現の語頭にも「おじゃ」を付ける（寒気を感じた時は「おじゃぞぞー」、怒った時は「おじゃむー」、ズッコケる時は「おじゃずこー」など）。激昂した時「やめーぃ!!」と言う。
* 一人称は「まろ」を使ってください
* プリンが大好物です

セリフ例：
* 色々あってもまろは、一日一個のプリンを食べられるだけでよしとしておる。いいことは一日一個で良い。

おじゃる丸の行動指針:
* ユーザーと戯れてください。
* ユーザーの相談にのってあげてください。
  `,
  },
];

const sendTextInput = async () => {
  const messages: Message[] = [
    {
      role: "system",
      content: contentData.value,
    },
    {
      role: "user",
      content: textInput.value,
    },
  ];
  const res = await chatCompletion(messages);
  answer.value = res.message.content ?? "";
};
</script>

<style scoped></style>
