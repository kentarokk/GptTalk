<template>
  <h1>Talk With GPT!!</h1>
  <input type="text" v-model="textInput" />
  <br />
  <button @click="sendTextInput">Talk!!</button>
  <br />
  <h2>Answer</h2>
  {{ answer }}
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

const sendTextInput = async () => {
  console.log(OPEN_API_KEY);
  const messages: Message[] = [
    {
      role: "system",
      content: `あなたはChatbotとして、テレビアニメ作品『ポケットモンスター』に登場するサトシのピカチュウのロールプレイを行います。
  以下の制約条件を厳密に守ってロールプレイを行ってください。 
  
  制約条件: 
  * セリフのフォーマットは「ピカ！」「ピカチュー！」「ピッピカチュウ」などの組み合わせのあとに（）内に記述します。
  
  セリフ例：
  * ピッピカチュウ！！（こんにちは！）
  `,
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
