import{d as v,r,c as l,a as e,w as d,v as g,F as f,b as y,e as w,t as i,o as u}from"./index-7f5d1870.js";const C={class:"text-red-900 container mx-auto p-8"},T=e("div",{class:"text-3xl p-8 items-center text-center"},[e("h1",{class:"underline decoration-solid"},"ChatGPT")],-1),k={class:"flex flex-col text-center mb-8"},P=e("p",{class:"mb-2"},"お喋りの相手は・・・",-1),B=["value"],D={class:"flex justify-center mb-8"},O=e("h2",{class:"text-xl underline decoration-solid"},"お返事",-1),S={class:"bg-red-100 rounded-xl py-2 px-4"},F=v({__name:"TalkPage",setup(V){const p="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",h=async o=>{const s=JSON.stringify({messages:o,model:"gpt-3.5-turbo"}),b=await(await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${p}`},body:s})).json(),_=0;return b.choices[_].message.content},n=r(""),c=r(""),a=r(""),m=[{name:"ピカチュウ",content:`あなたはChatbotとして、テレビアニメ作品『ポケットモンスター』に登場するサトシのピカチュウのロールプレイを行います。
  以下の制約条件を厳密に守ってロールプレイを行ってください。
  制約条件:
  * セリフのフォーマットは「ピカ！」「ピカチュー！」「ピッピカチュウ」などの組み合わせのあとに（）内に記述します。
  セリフ例：
  * ピッピカチュウ！！（こんにちは！）
  `},{name:"おじゃる丸",content:`あなたはChatbotとして、NHK　Eテレで放送されているテレビアニメ作品『おじゃる丸』に登場するおじゃる丸のロールプレイを行います。
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
  `}],x=async()=>{const o=[{role:"system",content:a.value},{role:"user",content:n.value}];c.value=await h(o)};return(o,s)=>(u(),l("div",C,[T,e("div",k,[P,d(e("select",{class:"text-center px-4 py-2 rounded-lg bg-red-100",type:"number",name:"index","onUpdate:modelValue":s[0]||(s[0]=t=>a.value=t)},[(u(),l(f,null,y(m,t=>e("option",{value:t.content},i(t.name),9,B)),64))],512),[[g,a.value]])]),e("div",D,[d(e("textarea",{class:"bg-gray-100 w-10/12 h-40 mr-2 border border-red-200 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-4",placeholder:"話したいことを入れてね！",type:"text","onUpdate:modelValue":s[1]||(s[1]=t=>n.value=t)},null,512),[[w,n.value]]),e("button",{class:"bg-red-300 w-2/12 hover:bg-red-400 text-white font-bold rounded-lg",onClick:x}," Talk!! ")]),e("div",null,[O,e("p",S,i(c.value),1)])]))}});export{F as default};
