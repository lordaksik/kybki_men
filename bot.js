require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');

const bot = new Telegraf(process.env.BOT_TOKEN || 8080)
bot.start((ctx) => {
   ctx.reply(`Привет ${ctx.message.from.first_name}`)
   console.log(ctx.message)
})
bot.help((ctx) => ctx.reply('Напиши /bot '))
bot.hears('/bot', async (ctx) => {
       async function request2() {

          let data = [];
          let response = [];
          let sum = [];
          let sum2 = [];
          let res = 0;
          let result = 0;
          let colors_cyb, colors_cyb2;
          for (j = 1; j < 31; j++) {
             response[j] = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/" + j + '/')
             data[j] = await response[j].json()
             if (data[j].items.page !== j) {
                break;
             }
             for (i = 0; i < data[j].items.results.length; i++) {
                colors_cyb = data[j].items.results[i].results[0].color
                sum.push(colors_cyb);
             }
          }
          for (i = 0; i < sum.length; i++) {
             if (sum[i] === 'white' && sum[i + 1] === 'white') {
                result = 1;
                break;
             }
             if (sum[i] === 'white') {
                res++;
             }
          }
          if (result === 0) {
             res = 0;
             var now = new Date();
             now.setDate(now.getDate() - 1)
             console.log(now.getFullYear() + '-0' + (now.getMonth() + 1) + '-' + now.getDate())
             let dat = now.getFullYear() + '-0' + (now.getMonth() + 1) + '-' + now.getDate();
             for (k = 1; k < 31; k++) {
                response[k] = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/" + dat + "/7/" + k + '/')
                data[k] = await response[k].json()
                if (data[k].items.page !== k) {
                   break;
                }
                for (i = 0; i < data[k].items.results.length; i++) {
                   colors_cyb2 = data[k].items.results[i].results[0].color
                   sum.push(colors_cyb2);
                }
             }
             //console.log(sum)
             for (i = 0; i < sum.length; i++) {
                if (sum[i] === 'white' && sum[i + 1] === 'white') {
                   break;
                }
                if (sum[i] === 'white') {
                   res++;
                }
             }
          }
          console.log('Было ' + res + " кубков");
          if (sum[0] === 'white' && res > 10) {
             ctx.reply('Было ' + res + " кубков");
          }
       }
   function good() {
      ctx.reply( "Вы запустили Бота на стратегию «Колесо» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
       ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
      ctx.reply('Бот отслежки запущен!')
      global.time = setInterval(request2, 90000)
   }



   good()
}
)

bot.hears('/end', async (ctx) => {

   try {
      clearInterval(time);

      ctx.reply("Пока");
   } catch (err) {
      ctx.reply("Этот бот и так выключен");
   }
})
bot.hears('/kol', async (ctx) => {
   async function inform() {

      let data = [];
      let response = [];
      let sum = [];
      let res = 0;
      let result = 0;
      let colors_cyb, colors_cyb2;
      for (j = 1; j < 31; j++) {
         response[j] = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/" + j + '/')
         data[j] = await response[j].json()
         if (data[j].items.page !== j) {
            break;
         }
         for (i = 0; i < data[j].items.results.length; i++) {
            colors_cyb = data[j].items.results[i].results[0].color
            sum.push(colors_cyb);
         }
      }
      for (i = 0; i < sum.length; i++) {
         if (sum[i] === 'white' && sum[i + 1] === 'white') {
            result = 1;
            break;
         }
         if (sum[i] === 'white') {
            res++;
         }
      }
      //console.log(sum)
      if (result === 0) {
         res = 0;
         var now = new Date();
         now.setDate(now.getDate() - 1)
         console.log(now.getFullYear() + '-0' + (now.getMonth() + 1) + '-' + now.getDate())
         let dat = now.getFullYear() + '-0' + (now.getMonth() + 1) + '-' + now.getDate();
         for (k = 1; k < 31; k++) {
            response[k] = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/" + dat + "/7/" + k + '/')
            data[k] = await response[k].json()
            if (data[k].items.page !== k) {
               break;
            }
            for (i = 0; i < data[k].items.results.length; i++) {
               colors_cyb2 = data[k].items.results[i].results[0].color
               sum.push(colors_cyb2);
            }
         }
         //console.log(sum)
         for (i = 0; i < sum.length; i++) {
            if (sum[i] === 'white' && sum[i + 1] === 'white') {
               break;
            }
            if (sum[i] === 'white') {
               res++;
            }
         }
      }
      ctx.reply('Было ' + res + " кубков");

   }
inform()
})
bot.launch()

