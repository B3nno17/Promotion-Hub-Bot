const {
  Client,
  Attachment
} = require('discord.js');
const Discord = require('discord.js');
const ytdl = require("ytdl-core");
const bot = new Discord.Client();
const PREFIX = '!';
const token = 'NzAxNDAxNTI3NDUzMDg5Nzkz.XpxDqg.qKeQqL-ZMpRIwmC5i_qXvnHxNRM';
var version = '1.0.1';
const cheerio = require('cheerio');
var servers = {};




//main bot config
bot.on('ready', () => {
  console.log('The bot is online!')
  bot.user.setActivity('Still Being Developed!', {
    type: 'PLAYING'
  });

});
bot.on("guildMemberAdd", function (member) {
  let size;
  var mem = member.user;
  var embed = new Discord.RichEmbed()
    .setTitle(member.displayName)
    .setDescription("joined the server")
    .setThumbnail(mem.displayAvatarURL)
    .setColor("#84A98C")
  bot.channels.find("id", "592237788619866123")
  let Role = member.guild.roles.find("name", "Member");
  member.addRole(Role);
});


bot.on('message', (message) => { //whenever a message is sent
  if (message.content.includes('discord.gg/' || 'discordapp.com/invite/')) { //if it contains an invite link
    message.delete() //delete the message
      .then(message.channel.send('Link Deleted:\nInvite links are not permitted on this server'))
  }
})


bot.on('message', async message => {

  let args = message.content.substring(PREFIX.length).split(" ");
  switch (args[0]) {
    
    
       case 'userinfo':
 
            if (message.content.startsWith(PREFIX + 'userinfo')) {
 
                var uundefined = message.author.username;
                var iinfoicon = message.author.avatarURL;
                var rroles = message.member.roles.array().slice(1).join('\n');
                var embed = new Discord.RichEmbed()
                    .setTitle('User Information')
                    .addField('Player Name', uundefined)
                    .addField('Current Server name', message.guild.name)
                    .addField('Bot Name', bot.user.username)
                    .addField('Your Roles', mention)
                    .setColor(0xB89F20)
                    .setImage(iinfoicon)
                    .setTimestamp()
                    .setFooter('made by benno')
                message.channel.sendEmbed(embed)
            }
 
            break;
            case "whois":
              
              if (message.content.startsWith(PREFIX + 'whois')) {
              if (message.mentions.members.first()) {
                guildMember = message.mentions.members.first();
              } else {
                guildMember = message.member;
              }
            
              // We need the User object aswell for different properties
              
 
              var member = message.mentions.users.first();

              const user = guildMember.user;
             
              let embed = new Discord.RichEmbed()
                .setAuthor(user.username)
                .setDescription("Users Info", true)
                .setColor("#64FF00", true)
                .addField("Full Username:", `${user.username}${user.discriminator}`, true)
                .addField("ID:", user.id, true)
                .addField("Created at:", user.createdAt, true)
                .addField("Status:", `${user.presence.status}`, true)
                .addField("Game:", `${user.presence.game}`, true)
                .setImage(member.avatarURL)

                .addField("Roles", guildMember.roles.map(r => `${r}`).join('|'), true);
                
            
              message.channel.send(embed);
              
  
              break;}
            
          
              case 'kick':
                if (message.content.toLowerCase().startsWith(PREFIX + "kick")) {
      if (!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("You Don't have permissions to access this command! :x:");
      if (message.content.toLowerCase().startsWith(PREFIX + "kick")) {
        var member = message.mentions.members.first();
        if (member) {

          // Kick
          member.kick().then((member) => {
            // Successmessage
            message.channel.send(`succesfully kicked ${member.displayName}!`, {
              files: ["https://media.giphy.com/media/3XDXN8tBv5KkjRQpJz/giphy.gif"]
            });
          }).catch(() => {
            // Failmessage
            message.channel.send("i cant to kick this user");
          });
        } else {
          message.reply('you need to select a person!')
        }
        }
      }
      break;
      

    case 'ban':
      if (!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("You Don't have permissions to access this command! :x:");
      if (message.content.toLowerCase().startsWith(PREFIX + "ban")) {
        var member = message.mentions.members.first();
        if (member) {
          // Kick
          member.ban().then((member) => {
            // Successmessage
            message.channel.send(`succesfully banned ${member.displayName}!`, {
              files: ["https://media.giphy.com/media/3XDXN8tBv5KkjRQpJz/giphy.gif"]
            });
          }).catch(() => {
            // Failmessage
            message.channel.send("i cant to ban this user");
          });
        } else {
          message.reply('you need to select a person!');
        }
      }
      break;
      


    case 'Ping':
      message.channel.send('Pong!'), {

      }
      break;



    case 'selfbot':
      message.channel.send('sine selfbot:'), {
        files: ["https://cdn.discordapp.com/attachments/534729181536321537/594888600877793283/Screenshot_163.png"]
      }
    case 'products':
      if (message.content.toLowerCase().startsWith(PREFIX + "products")) {
        const embed = new Discord.RichEmbed()
          .setTitle('What we have for sale!')
          .addField('DotTwitch Bot!', 'This bot can be used for free followers on twitch!')
          .addField('Ip Pinger!', 'This can knock people offline if you have there ip address!')
          .addField('Twitch viewer bot!', 'Gives you twitch viewers when you are streaming!')
          .addField('Nord VPN Accounts!', 'Nord vpn accounts to keep your ip address hidden!')
          .addField('Free discord nitro method!', 'If you buy this its at your own risk as we dont know if it works!')
          .addField('Tiktok Follows, hearts and more!', 'If you buy this you will get free followers or what ever you want on tiktok!')
          .addField('Discord self bot!', 'This is not my bot, if you want this contact me and ill send you to the guy that sells it!')
          .addField('Handbook of jigs!', 'Basically a handbook of methods to get free things!')
          .addField('Cash app method!', 'Free money on cash app!')
          .addField('Crack Pack!', 'A pack of cracking tools!')
          .addField('Rainbow 6 cheats and spoofer!', 'Lifetime rainbow 6 cheats and a spoofer!')
          .addField('Hack pack!', 'Pack of hack programs!')
          .setThumbnail('https://cdn.discordapp.com/attachments/689760212974043175/690560854197796914/Sellingtomillennial.gif')
          .setColor("#84A98C")
        message.channel.send(embed);
      }
      break;
     

    case "staffhelp":
      if (!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("You Don't have permissions to access this command! :x:");
      if (message.content.toLowerCase().startsWith(PREFIX + "staffhelp")) {
        const embed = new Discord.RichEmbed()
          .setTitle("Staff commands for this bot!")
          .addField(
            "!Purge (the amout of messages you want to delete!",
            "This command will let you select how many messages you delete!"
          )
          .addField(
            "!kick (mention user)",
            "If it isnt obvious, this will kick a player!"
          )
          .addField(
            "!ban (mention user)",
            "If it isnt obvious, this will ban a player!"
          )
          .setFooter("This bot was created by Benno#1836")
          .setColor(0x10cf98);
        message.channel.sendEmbed(embed);
        client.channels.get('680663545905676289')
      }
      break;



      
  

    case 'addrole':
      if (message.content.toLowerCase().startsWith(PREFIX + "addrole")) {
        if (!Message.member.hasPermission("MANAGE_ROLES")) return message.reply('you dont have permission to use this command!')
        let rMember = message.mentions.members.first() || message.guild.members.find(m => m / user === args[0]) || message.guild.members.get(args[0])
        if (!rMember) return message.reply('cant to find this user :/')
        let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
        if (!role) return message.reply('please select a role you want to add')
        let reason = args.slice(2).join(" ")
        if (!reason) return message.reply('no reason given')
        if (!message.guild.me.hasPermission("MANAGE_ROLES", "MANAGE_MEMBERS")) return message.reply('I dont have permission for it!')

        if (rMember.roles.has(role.id)) {
          return message.reply(`${rMember} already have this role`)
        } else {
          await rMember.addRole(role.id).catch(e => console.log(e.message))
          message.channel.send(`successfully added ${role.name} to ${rMember}`)
        }
      }
      break;
      
    case 'purge':
      if (message.content.toLowerCase().startsWith(PREFIX + "purge")) {
        message.delete();
        if (!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("You Don't have permissions to access this command! :x:");
        if (!args[1]) return message.channel.sendMessage("Pls write the amount of messages that you want to delete. :x:");
        var amount = args[1];
        message.channel.bulkDelete(amount).then(() => {
          message.channel.sendMessage("i've been deleted " + " " + amount + " " + "message :v:").then(message => message.delete(5000));
        })
      }
      break;


    case "roast":
      if (message.content.toLowerCase().startsWith(PREFIX + "roast")) {
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1) return message.reply('You must mention someone to roast them.').catch(console.error);
        var roast = [
          "Your shit at rocket league!.",
          "I really wanted to roast you but my mum said I cant burn trash.",
          "I was going to give you a nasty look... but I see you already have one.",
          "Remember when I asked for your opinion? Me neither.",
          "Everyone’s entitled to act stupid once in awhile, but you really abuse the privilege.",
          "I'm trying to see things from your point of view, but I can't get my head that far up my ass.",
          "I haven't seen a fatty like you run that fast since twinkies went on sale for the first time.",
          "Two wrongs don't make a right, take your parents as an example.",
          "Just looking at you, I now understand why some animals eat their young offspring.",
          "Does time actually fly when you're having sex, or was it just one minute after all?",
          "You should go do that tomorrow. Oh wait, nevermind, you've made enough mistakes already for today.",
          "This is why you dont have nice things",
          "My teacher told me to erase mistakes, i'm going to need a bigger eraser.",
          "You're IQ's lower than your dick size.",
          "Are you always such an idiot, or do you just show off when I’m around?",
          "There are some remarkably dumb people in this world. Thanks for helping me understand that.",
          "I could eat a bowl of alphabet soup and shit out a smarter statement than whatever you just said.",
          "You’re about as useful as a screen door on a submarine.",
          "You always bring me so much joy—as soon as you leave the room.",
          "Stupidity’s not a crime, so feel free to go.",
          "If laughter is the best medicine, your face must be curing the world.",
          "The only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
          "It looks like your face caught fire and someone tried to put it out with a hammer.",
          "Scientists say the universe is made up of neutrons, protons and electrons. They forgot to mention morons like you.",
          "Why is it acceptable for you to be an idiot but not for me to point it out?",
          "You're so fat you could sell shade.",
          "Your family tree must be a cactus because everyone on it is a prick.",
          "You'll never be the man your mother is.",
          "Just because you have an ass doesn't mean you need to act like one.",
          "Which sexual position produces the ugliest children? Ask your mother she knows.",
          "If I had a face like yours I'd sue my parents.",
          "The zoo called. They're wondering how you got out of your cage?",
          "Hey, you have something on your chin... no, the 3rd one down.",
          "Aww, it's so cute when you try to talk about things you don't understand.",
          "You are proof that evolution can go in reverse.",
          "Brains aren't everything. In your case they're nothing.",
          "You're so ugly when you look in the mirror, your reflection looks away.",
          "I'm sorry I didn't get that - I don't speak idiot.",
          "It's better to let someone think you're stupid than open your mouth and prove it.",
          "Were you born this stupid or did you take lessons?",
          "You're such a beautiful, intelligent, wonderful person. Oh I'm sorry, I thought we were having a lying competition.",
          "Don't you get tired of putting make up on two faces every morning?",
          "Hey, I'm straighter than the pole your mom dances on.",
          "If ugliness were measured in bricks, you would be the Great Wall of China.",
          "I thought I said goodbye to you this morning when I flushed the toilet",
          "If you're trying to improve the world, you should start with yourself. Nothing needs more help than you do",
          "Zombies are looking for brains. Don't worry. You're safe.",
          "spreading rumors? At least you found a hobby spreading something other than your legs.",
          "i would tell you to eat trash but that’s cannibalism",
          "If you spoke your mind, you would be speechless",
          "I can fix my ugliness with plastic surgery but you on the other hand will stay stupid forever",
          "Acting like a dick won't make yours any bigger",
          "If I wanted to hear from an asshole, I would have farted",
          "Roses are red. Violets are blue. God made us beautiful. What the hell happened to you?",
          "You remind me of a penny, two faced and worthless!",
          "I've met some pricks in my time but you my friend, are the f*cking cactus",
          "I'd slap you, but that would be animal abuse",
          "If you're gonna be a smartass, first you have to be smart. Otherwise you're just an ass. ",
          "I know I’m talking like an idiot. I have to, other wise you wouldn't understand me.",
          "You're so dumb, your brain cell died of loneliness",
          "You shouldn't let your mind wander..its way to small to be out on its own",
          "I don't know what makes you so dumb, but its working",
          "You should put the diaper on your mouth, that's where the craps comin' out.",
          "You would be much more likable if it wasn’t for that hole in your mouth that stupid stuff comes out of. ",
          "Could you go away please, I'm allergic to douchebags",
          "If you had any intelligence to question I would have questioned it already.",
          "I wish I had a lower I.Q,  maybe then I could enjoy your company.",
          "I would answer you back but life is too short, just like your d*ck",
          "Mirrors don't lie. Lucky for you, they can't laugh either.",
          "I was right there are no humans in this channel",
          "You have a face not even a mother could love....",
          "You know what I would find if I looked up idiot in the dictionary a picture of you?",
          "You make the guys on Jackass look like Einstein.....",
          "I would slap you but I don't want to make your face look any better",
          "Sorry, I can't put small objects in my mouth or Ill choke",
          "You should wear a condom on your head, if you're going to be a dick you might as well dress like one",
          "Have you been shopping lately? They're selling lives at the mall, you should get one"
          

        ];
        var roasts = roast[Math.floor(Math.random() * roast.length)];
        message.channel.send(user.username + " " + roasts);
      }
      break;

    case "8ball":
      if (message.content.toLowerCase().startsWith(PREFIX + "8ball")) {
        let question = args.join(' ');
        if (question.length < 1) return message.reply('You must supply a question for the 8ball.').catch(console.error);
        var ball = [
          "It is certain",
          "It is decidedly so",
          "Without a doubt",
          "Yes definitely",
          "You may rely on it",
          "As I see it, yes",
          "Most likely",
          "Outlook good",
          "Yes",
          "Signs point to yes",
          "Reply hazy try again",
          "Ask again later",
          "Better not tell you now",
          "Cannot predict now",
          "Concentrate and ask again",
          "Don't count on it",
          "My reply is no",
          "My sources say no",
          "Outlook not so good",
          "Very doubtful",
          "Your shite at Rocket League",

        ];
        var balls = ball[Math.floor(Math.random() * ball.length)];
        message.channel.send("Question: " + question + " Answer: " + balls);
      }
      break;
    case "ping":
      if (message.content.toLowerCase().startsWith(PREFIX + "ping")) {
        message.channel.send('Calculating time....')
          .then(message => {
            message.channel.send(`Pong! (took: ${message.createdTimestamp - message.createdTimestamp}ms)`);
          });
      };
      break;


    case 'nuke':
      if (!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("You Don't have permissions to access this command! :x:");
      if (message.content.toLowerCase().startsWith(PREFIX + "nuke")) {
        async function clear() {
          message.delete();
          const fetched = await message.channel.fetchMessages({
            limit: 99
          });
          message.channel.bulkDelete(fetched);
          message.channel.send(`succesfully nuked this channel!`, {
            files: ["https://media.giphy.com/media/oe33xf3B50fsc/giphy.gif"]
          });
          then(msg => {
            msg.delete({
              timeout: 10000
            })
          })

        }
        clear();
      }
      break;
    case "coinflip":
      if (message.content.toLowerCase().startsWith(PREFIX + "coinflip")) {
        var coinflip = [
          "Heads",
          "Tails"
        ];
        var coinflips = coinflip[Math.floor(Math.random() * coinflip.length)];
        message.channel.send(coinflips);
      }
      break;


     
      case 'play':
            
        function play(connection, message){
            var server = servers[message.guild.id];

            server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

            server.queue.shift();

            server.dispatcher.on("end", function(){
                if(server.queue[0]){
                    play(connection, message);
                }else {
                    connection.disconnect();
                }
            });


        }


         if(!args[1]){
             message.channel.send("**You must provide a link,**");
             return;
         }

         if(!message.member.voiceChannel){
             message.channel.send("**You must be in a voice channel**");
             return;
         }

         if(!servers[message.guild.id]) servers[message.guild.id] = {
             queue: []
         }

         var server = servers[message.guild.id];

         server.queue.push(args[1]);

         if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
             play(connection, message);

             



         }) 






    break;



    case 'skip':
      if (message.content.toLowerCase().startsWith(PREFIX + "skip")) {
        var server = servers[message.guild.id];
        if (server.dispatcher) server.dispatcher.end();
        message.channel.send("**Skipping the song**")
      }
      break;
      




    case 'stop':
      if (message.content.toLowerCase().startsWith(PREFIX + "stop")) {
        var server = servers[message.guild.id];
        if (message.guild.voiceConnection) {
          for (var i = server.queue.length - 1; i >= 0; i--) {
            server.queue.splice(i, 1);
          }

          server.dispatcher.end();
          message.channel.send("**Ending the queue leaving the voice channel,**")
          console.log('stopped the queue')
        }
      }
      break;
    case "ronniepickering":
      if (message.content.toLowerCase().startsWith(PREFIX + "ronniepickering")) {
        const attachment10 = new Attachment('./ron.gif')
        message.channel.send(message.author, attachment10);
        message.channel.send("who")
      }
      break;
      case 'serverinfo':
            if (message.content.startsWith(PREFIX + 'serverinfo')) {
                var serverthumbnail = message.guild.iconURL;
                var serverembed = new Discord.RichEmbed()
                .setTitle('Server Information')
                .addField('Server Name', message.guild.name)
                .addField("Server Owner", message.guild.owner.user.tag, true)
                .addField("Member Count", message.guild.memberCount)
                .setColor(0xB89F20)
                .setThumbnail(serverthumbnail)
                .setFooter('Bot made by Benno! ;)')
                .setTimestamp()
            message.channel.sendEmbed(serverembed)
            }
 
            break;
           

            
            case 'botinfo':
            if (message.content.startsWith(PREFIX + 'botinfo')) {
                let author = message.author.username;
                let boticon = bot.user.displayAvatarURL;
                let botembed = new Discord.RichEmbed()
 
                    .setTitle("**Bot Information**")
                    .setDescription("Bot made by Benno ;)")
                    .addField("Bot Name", bot.user.username)
                    .addField("Info", bot.user.createdAt)
                    .addField('Version', version)
                    .addField('Servers', bot.guilds.size)
                    .setColor(0xffbf43)
                    .setThumbnail(boticon)
                    .setAuthor(author)
                    .setTimestamp()
 
                message.channel.send(botembed)
            }
 
            break;
          
            
    case "image":
      if (message.content.toLowerCase().startsWith(PREFIX + "image")) {


        var options = {
          url: "http://results.dogpile.com/serp?qc=images&q=" + "rocket league",
          method: "GET",
          headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
          }

        };
        request(options, function (error, response, responseBody) {
          if (error) {
            return;
          }


          $ = cheerio.load(responseBody);


          var links = $(".image a.link");

          var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

          console.log(urls);

          if (!urls.length) {

            return;
          }

          // Send result
          message.channel.send(urls[Math.floor(Math.random() * urls.length)]);



        });
        break;
        
        




      }





  }

});
bot.on('raw', event => {
  if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE") {

    let channel = bot.channels.get(event.d.channel_id);
    let message = channel.fetchMessage("592273672094482432").then(msg => {
      let user = msg.guild.members.get(event.d.user_id);

      if (msg.author.id == "524862224355950593" && msg.content != "!verify") {


        if (user.id != bot.user.id) {
          var roleObj = msg.guild.roles.find(r => r.name === "MEMBERS");
          var memberObj = msg.guild.members.get(user.id);

          if (event.t === "MESSAGE_REACTION_ADD") {
            memberObj.addRole(roleObj);

          } else {
            memberObj.removeRole(roleObj);
          }
        }

      }
    })


  }




});





bot.login(token);
