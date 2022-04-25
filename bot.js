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
    let sum1 = [];
    let res = 0;
    let res1=0,res2=0,res3=0,res4=0,res5=0,res6=0,res7=0,res8=0,res9=0;
    let res21=0,res22=0,res23=0,res24=0,res25=0,res26=0,res27=0,res28=0,res29=0;
    let res31=0,res32=0,res33=0,res34=0,res35=0,res36=0,res37=0,res38=0,res39=0;
    let res40=0;
    var fo = [];
    for (var i = 0; i <= 40; i++) {
        fo.push(0);
    }
    let result = 0;
    let numb=0,numb2=0;
    let colors_cyb, colors_cyb2;
    for (j = 1; j < 31; j++) {
        response[j] = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/" + j + '/')
        data[j] = await response[j].json()
        if (data[j].items.page !== j) {
            break;
        }
        for (i = 0; i < data[j].items.results.length; i++) {
            colors_cyb = data[j].items.results[i].results[0].color
            numb=data[j].items.results[i].results[0].number
            sum.push(colors_cyb);
            sum1.push(parseInt(numb,10))
        }
    }
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
            numb2=data[k].items.results[i].results[0].number
            sum.push(colors_cyb2);
            sum1.push(parseInt(numb2,10))
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

    for (q=1;q<19;q++) {
        for (i = 0; i < sum1.length; i++) {
            if (sum1[i] === q && sum1[i + 1] === q) {
                break;
            }
            if (sum1[i] === q) {
                fo[q]++;
            }
        }
    }

    for (i=1;i<19;i++){
        console.log('было '+fo[i]+ ' раз число '+i );
        if (sum1[0] === i && fo[i] > 39){
         ctx.reply('было '+fo[i]+ ' раз число '+i );}}

    console.log('Было ' + res + " кубков");
    if (sum[0] === 'white' && res > 39) {
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
    let sum1 = [];
    let res = 0;
    let res1=0,res2=0,res3=0,res4=0,res5=0,res6=0,res7=0,res8=0,res9=0;
    let res21=0,res22=0,res23=0,res24=0,res25=0,res26=0,res27=0,res28=0,res29=0;
    let res31=0,res32=0,res33=0,res34=0,res35=0,res36=0,res37=0,res38=0,res39=0;
    let res40=0;
    var fo = [];
    for (var i = 0; i <= 40; i++) {
        fo.push(0);
    }
    let result = 0;
    let numb=0,numb2=0;
    let colors_cyb, colors_cyb2;
    for (j = 1; j < 31; j++) {
        response[j] = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/" + j + '/')
        data[j] = await response[j].json()
        if (data[j].items.page !== j) {
            break;
        }
        for (i = 0; i < data[j].items.results.length; i++) {
            colors_cyb = data[j].items.results[i].results[0].color
            numb=data[j].items.results[i].results[0].number
            sum.push(colors_cyb);
            sum1.push(parseInt(numb,10))
        }
    }
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
                numb2=data[k].items.results[i].results[0].number
                sum.push(colors_cyb2);
                sum1.push(parseInt(numb2,10))
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

for (q=1;q<19;q++) {
    for (i = 0; i < sum1.length; i++) {
        if (sum1[i] === q && sum1[i + 1] === q) {
            break;
        }
        if (sum1[i] === q) {
            fo[q]++;
        }
    }
}
   for (i=1;i<19;i++){
      ctx.reply('было '+fo[i]+ ' раз число '+i );}   
}
   ctx.reply('Было ' + res + " кубков");
inform()
})
bot.launch()

