import * as https from 'https'

export function renderTemplate(username: string, code: number): string {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  const verCode = String(code).split('');
  const day = new Date().getDay()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  const date = `${day} ${months[month-1]}, ${year}`
  
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Reset your password</title>
    <style>
      @import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap);
      *{
        font-family: "Poppins", sans-serif;
      }
    </style>
  </head>
  <body class="bg-gradient-to-r from-[#4b6cb7] to-[#182848]">
    <div class="w-full p-3">
      <div class="w-full flex items-center justify-between">
        <a href="#" class="inline-flex items-center">
          <img src="../assets/icons8-blogger-48.svg" alt="" />
          <h1 class="text-xl text-white">BravoBlog</h1>
        </a>
        <span class="text-xl text-white">${date}</span>
      </div>
      <div class="w-full max-w-lg mx-auto p-6 rounded-md bg-white text-center">
        <div class="w-44 h-44 rounded-full overflow-hidden p-8 bg-sky-100 mx-auto">
          <img src="https://cdn-icons-png.flaticon.com/512/6690/6690078.png" class="w-full h-full object-cover" alt="">
        </div>
        <h1 class="text-2xl font-extrabold my-4">Your reset password code</h1>
        <p class="text-md">Hey <span class="font-bold">${username}</span>, Thank you for using my website <a href="#" class="text-blue-600 hover:underline">BravoBlog</a>. Don't share this code with others. The code is valid for <b>10 minutes</b>. Your code is:</p>
        <div class="mx-auto my-3 inline-flex item-center gap-2">
          ${verCode.forEach(
            (item) =>
              `
              <div class="w-8 h-10 rounded-sm text-center pt-[5px] bg-sky-100 text-xl text-sky-600">${item}</div>
              `,
          )}
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
}
