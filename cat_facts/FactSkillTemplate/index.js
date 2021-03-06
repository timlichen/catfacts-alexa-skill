'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.8c9be36f-04e8-4c3f-a7f4-3b5f16cf63e1"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Cat Facts';

/**
 * Array containing space facts.
 */
var cat_FACTS = [
  "Americans really love their pet cats. There are approximately 14 million more house cats than dogs in the US.",
  "Male cats are called toms and females are called queens or mollies.",
  "The saying, ‘A cat always lands on its feet’ isn’t just an old myth. Some cats have fallen more than 320 metres onto concrete and come away unharmed.",
  "There’s a reason why cats are likely to survive high falls – they have more time to prepare for the landing.",
  "It’s not a flock, it’s not a herd – a group of cats together is known as a ‘clowder’.",
  "According to statistics, cat owners are healthier than those without cats. The risk of heart attack is cut by a third among people who have a pet cat.",
  "Just as a dog’s bark has several different meanings, a cat may purr because it is nervous, happy or feeling unwell.",
  "It’s common knowledge that cats are fans of milk, but many of them are lactose intolerant. This means that they are actually allergic to milk.",
  "Garfield, the lasagne-loving feline, was featured in the Guinness Book of World Records for being the most widely published cartoon.",
  "Cats are thought to be pretty smart, and with a brain 90% similar to the human brain, it’s no surprise.",
  "When Abraham Lincoln was US President, he had four pet cats which lived with him in the White House.",
  "Felicette was the first feline to make a trip to space. She luckily survive the mission and was nicknamed ‘Astrocat’.",
  "If you think of yourself as a ‘cat person’, you’re among 11.5% of people in the world.",
  "If you’re a male with a pet cat, you’re more likely to find true love. This is due to the fact that people view cat owners are kind, trustworthy and sensitive.",
  "The record for the largest number of kittens in the same litter was 19.",
  "Over her lifetime, a cat called Dusty had a total of 420 kittens.",
  "The oldest cat to give birth to kittens was called Kitty. She was 30 years old when she birthed her last kittens.",
  "Bagpuss was a 1999 TV show which featured an old cloth cat. In 2001, it came fourth in a poll of the greatest kids’ TV shows.",
  "While people dote over their cats in the West, around 4 million cats are killed and eaten over in Asia.",
  "There are about 70 different cat breeds and a staggering 500 million pet cats in the world.",
  "Ancient Egyptians worshipped a goddess who was half cat and half woman.",
  "In Ancient Egypt, civilians would suffer a severe punishment if they hurt a cat.",
  "Ever noticed your cat sleeping most of the time? On average, cats sleep for about 16 hours per day.",
  "Kittens sleep even more often, since growth hormones are released when they are napping.",
  "The front paws of a cat are different from the back paws. They have five toes on the front but only four on the back.",
  "Some cats are known as ‘polydactyl’ and have extra toes. Some polydactyl have as many as eight toes per paw.",
  "Unlike dogs, cats have no sense of what is sweet. No wonder they never seem happy with cakes!",
  "Did you think the cat flap was an ultra-modern idea? Isaac Newton is credited with the invention of the cat flap – something which most cat owners now have.",
  "Isaac Newton himself had a cat called Spithead, which influenced his invention. Spithead went on to have kittens, who all got their very own cat flap.",
  "Many cat owners take their pets to the vet to be neutered, and by doing so, increase the life expectancy of their pets by 2-3 years.",
  "Cats can see very well in the dark, which explains why they are always wandering around at night.",
  "Adolf Hitler hated cats, so there’s another reason why you shouldn’t like him.",
  "Taurine is an amino acid which can be found in cat food. Without this substance, your pet cat would eventually go blind.",
  "House cats can run at a speed of 30 miles per hour.",
  "The kidneys of a cat are quite amazing, since they can filter water before using it. This means that a cat can drink sea water and the salt will be filtered out.",
  "Those cute furry bits inside a cat’s ear are called ‘ear furnishings’. They ensure that dirt doesn’t go inside and also helps them to hear well.",
  "Cats have a great sense of hearing and can hear ultrasonic noises. They could potentially hear dolphins.",
  "It’s not just humans who are right-handed or left-handed. Most female cats prefer using their right paw, while male are more likely to be ‘left-pawed’.",
  "A ‘haw’ is the third eyelid of a cat, which can only be seen when the cat isn’t well.",
  "They might have an extra eyelid, but they don’t have any eyelashes.",
  "The original version of Cinderella in Italy featured a cat as the fairy godmother.",
  "Dogs make 10 different sounds, while cats can make as many as 100 different noises.",
  "Cats seem like such sweet creatures, but approximately 40,000 people suffer from cat bites every single year in America.",
  "When you see a cat rubbing up against a human, it is being affectionate but also marking its territory to make other cats aware.",
  "The cat family consists of many different animals, but the largest is the Siberian Tiger, which can be as large as 12 feet long.",
  "The black-footed cat is the smallest wild cat, at just 20 inches long.",
  "The wealthiest cat ever was Blackie, a multi-millionaire. It owned £15 million after its rich owner died.",
  "London was the home of the first ever cat show. It took place in 1871 and started a trend which has continued ever since.",
  "While cats like to catch mice and eat them, it’s not necessarily a good meal. They can contract tapeworm through eating these rodents.",
  "Cats’ hearts beat at a rate of 110-140 beats per minutes – around twice as fast as the average human.",
  "Ancient Egyptian cat owners would shave off their eyebrows when mourning for their dead kitties.",
  "‘Mau’ is the Egyptian word for cat, and the oldest surviving cat breed is known as the Egyptian Mau, translated to mean the ‘Egyptian cat’.",
  "While people are hesitant to buy cats of opposite sexes, they will actually get along better than those of the same sex.",
  "If you own a cat, you should feed them 10-20 small meals every day, rather than fewer and larger meals.",
  "Over the Christmas season, cats should avoid poinsettias as they are poisonous.",
  "Stray and feral cats which live outdoors have a life span of around 4 years. Those which live indoors can live up to 16 years or more.",
  "Cats are lovers of fish, but too much tuna can cause them to become addicted to this meat.",
  "They use their tongues to thoroughly clean themselves, but they also use them to get rid of human scent.",
  "When cats are first born, they have blue eyes. Over time, the colour changes.",
  "Kittens also have much sharper teeth than adult cats. Their teeth become blunt when they are around 6 months old.",
  "Cats which have blue eyes for the duration of their lives are likely to be deaf.",
  "They usually hate water, but the Turkish Van cats actually enjoy getting wet!",
  "Unlike many other animals, cats cannot produce fat on their own. It’s important to give your pet a balanced diet which includes good fats.",
  "Just as a human’s fingerprints are unique, each cat has a completely different nose.",
  "Many people are allergic to cats, but cats can actually be allergic to humans too. Around one in 200 domestic cats suffer from asthma due to smoke, dust and other particles within houses.",
  "As long as you introduce your cat to your dog before they are both six months old, they should get along well.",
  "Although studies suggested that cats didn’t enjoy being stroked by humans, further research has proven that they do in fact like it.",
  "A cat’s brain is so quick that even a super-computer in 2015 couldn’t beat it.",
  "Feral cats will go out exploring more often and much further than house cats. House cats can normally be found within the area they live.",
  "It is thought that 55% of house cats are obese due to overeating.",
  "Alzheimer’s disease can be found in cats, just as it can be found in humans.",
  "Cats were first kept as pets about 5,000 years ago in China. Farmers were the first to realise that felines could be kept in the home.",
  "In 2011, scientists concluded that your pet cat may become very ill if you interfere with its routine.",
  "The high-pitched cry which you may have heard from your cat is an attempt for cats to get their own way. The cry is similar to that of a new-born baby.",
  "Cats enjoy sitting on warm objects, which is probably why your kitty likes to sit on your computer so often.",
  "It’s a well-known fact that cats are very fussy creatures, and if your pet doesn’t always drink water from its water bowl, it may not like the shape of the bowl!",
  "Cats might look harmless, but they have worked together to make over 30 different species extinct. Even house cats love hunting, and have contributed heavily to this figure.",
  "They only sweat through their paws, as this is the only place which has sweat glands.",
  "In the 1950’s, Disneyland bought several cats in order to hunt mice at night. There are now more than 200 felines at the amusement park.",
  "Their whiskers are used to measure gaps and openings. They allow the cat to work out whether or not they will fit through spaces.",
  "Historians believe that every species of the cat family came from one of just five different wild cats from Africa.",
  "Female cats can breed with several males when they are in heat. These means that a litter of kittens could potentially have a few different fathers!",
  "A cat can rotate each of its ears separately. Each ear has a total of 32 muscles.",
  "Don’t feed chocolate to your cat – it’s poisonous.",
  "Cats are pretty amazing at jumping; they can jump up to seven times higher than the length of their tail.",
  "There’s a charming reason your cat brings dead mice to you. It means that your pet likes you!",
  "They cannot survive eating a vegetarian diet, which is why it’s important to feed your cat meat.",
  "Cats can find their way home even if they have travelled miles away.",
  "Black cats are the least likely to be adopted from an animal home, although people love buying jet black kittens.",
  "A cat’s tail will quiver if it is near somebody it loves.",
  "Think your cat purrs a lot? Cats purr up to 26 times per second.",
  "Felines enjoy spending time alone. Unlike dogs, they don’t need much attention and can be very happy without any companionship.",
  "You shouldn’t feed many cats from the same food bowl. It is very likely that some of them will refuse to eat from it, choosing rather to eat alone.",
  "Don’t stare at your cat for long periods of time. This is seen as threatening and will make it feel uneasy.",
  "There are many plants which are poisonous for cats, although parsley, sage and other herbs are among a cat’s favourite foods.",
  "If you put a collar on your cat, make sure it’s not too tight. You should be able to fit two fingers between the collar and your cat’s neck, or you could risk strangling it.",
  "The fear of cats is known as Ailurophobia.",
  "A town called Talkeetna in Alaska had a cat as mayor for 15 years.",
  "The record for the world’s longest cat was 48.5 inches.",
  "Cats do recognise their owners’ voices, but often act like they don’t care."

];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random cat fact from the cat facts list
        var factIndex = Math.floor(Math.random() * cat_FACTS.length);
        var randomFact = cat_FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a cat fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
