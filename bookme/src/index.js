/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

//<div>Icons made by <a href="http://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

/**
 * This simple sample has no external dependencies or session management, and shows the most basic
 * example of how to create a Lambda function for handling Alexa Skill requests.
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask B for Books for a book"
 *  Alexa: "Here's a book option for you: ..."
 */

/**
 * App ID for the skill
 */
var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * Array containing top books descriptions and info.
 */
var BOOKS = [
    
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"The Great Gatsby by F. Scott Fitzgerald. published April tenth, nineteenth twenty five. stands as the supreme achievement of F. Scott Fitzgerald's career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. Its the story of the fabulously wealthy Jay Gatsby, his love for the beautiful Daisy Buchanan, and of lavish parties on Long Island at a time when The New York Times noted gin was the national drink and sex the national obsession. it is an exquisitely crafted tale of America in the nineteen twenties."},
    "card": {
      "type": "Standard",
      "title": "The Great Gatsby",
      "text": "The Great Gatsby \nby F. Scott Fitzgerald Published: April 10, 1925\n This stands as the supreme achievement of F. Scott Fitzgerald's career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. Its the story of the fabulously wealthy Jay Gatsby, his love for the beautiful Daisy Buchanan, and of lavish parties on Long Island at a time when The New York Times noted gin was the national drink and sex the national obsession. It is an exquisitely crafted tale of America in the nineteen twenties.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/The-Great-Gatsby_small.jpeg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/The-Great-Gatsby_large.jpeg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"The Catcher in the Rye by J.D. Salinger. published July sixteenth, nineteen fifty one. a novel that captures the essence of a teenagers alienation in a heartless world."},
    "card": {
      "type": "Standard",
      "title": "The Catcher in the Rye",
      "text": "The Catcher in the Rye\nby J.D. Salinger\nPublished July 16, 1951\n A novel about 'an individual’s alienation in a heartless world.' Indeed, one of the primary themes that is highlighted throughout Holden Caulfield’s whirlwind narrative of mental breakdown is alienation. Holden seems only to connect with children younger than himself, those who have not yet been scarred or corrupted by the heartless world around them. He increasingly isolates himself by finding fault with others (everyone is a 'phony'), getting tossed out of boarding school after school, ruining every chance he has to establish a romantic relationship, and voicing his paranoia and disdain about the world to anyone who will listen. This narrative gives readers a look into the mind of a character whose world is crumbling around him, and his crumbling with it. It also gives voice to the impact and symptoms of mental illness. Holden’s breakdown highlights the importance of getting the necessary help for children who are dealing with grief.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/the-catcher-in-the-rye_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/the-catcher-in-the-rye_large.jpg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"The Grapes of Wrath by John Steinbeck. published April fourteenth, nineteen thirty nine. A pulitzer prize-winning epic of the Great Depression which chronicles the Dust Bowl migration of the 1930s and tells the story of one Oklahoma farm family, the Joads—driven from their homestead and forced to travel west to the promised land of California. "},
    "card": {
      "type": "Standard",
      "title": "The Grapes of Wrath",
      "text": "The Grapes of Wrath\nby John Steinbeck\nPublished April 14, 1939\n A Pulitzer Prize-winning epic of the Great Depression chronicles the Dust Bowl migration of the 1930s and tells the story of one Oklahoma farm family, the Joads—driven from their homestead and forced to travel west to the promised land of California. Out of their trials and their repeated collisions against the hard realities of an America divided into Haves and Have-Nots evolves a drama that is intensely human yet majestic in its scale and moral vision, elemental yet plainspoken, tragic but ultimately stirring in its human dignity. A portrait of the conflict between the powerful and the powerless, of one man’s fierce reaction to injustice, and of one woman’s stoical strength, the novel captures the horrors of the Great Depression and probes into the very nature of equality and justice in America. At once a naturalistic epic, captivity narrative, road novel, and transcendental gospel, Steinbeck’s powerful landmark novel is perhaps the most American of American Classics.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/The-Grapes-of-Wrath_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/The-Grapes-of-Wrath_large.jpg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"To Kill a Mockingbird by Harper Lee. published July eleventh, nineteen sixty. This novel explores with rich humor and unanswering honesty the irrationality of adult attitudes toward race and class in the Deep South of the 1930's."},
    "card": {
      "type": "Standard",
      "title": "To Kill a Mockingbird",
      "text": "To Kill a Mockingbird\nby Harper Lee\nPublished July 11, 1960\n Lawyer Atticus Finch defends the real mockingbird of Harper Lee's classic, Puliter Prize-winning novel—a black man charged with the rape of a white woman. Through the eyes of Atticus's children, Scout and Jem Finch, Harper Lee explores with rich humor and unanswering honesty the irrationality of adult attitudes toward race and class in the Deep South of the 1930's.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/To-Kill-a-Mockingbird_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/To-Kill-a-Mockingbird_large.jpg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"The Color Purple by Alice Walker. published nineteen eighty two. Tells the story of a poor black woman whose letters tell the story of twenty years of her life."},
    "card": {
      "type": "Standard",
      "title": "The Color Purple",
      "text": "The Color Purple\nby Alice Walker\nPublished 1982\n Celie is a poor black woman whose letters tell the story of 20 years of her life, beginning at age 14 when she is being abused and raped by her father and attempting to protect her sister from the same fate, and continuing over the course of her marriage to 'Mister', a brutal man who terrorizes her. Celie eventually learns that her abusive husband has been keeping her sister's letters from her and the rage she feels, combined with an example of love and independence provided by her close friend Shug, pushes her finally toward an awakening of her creative and loving self.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/The-Color-Purple_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/The-Color-Purple_large.jpg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"Ulysses by James Joyce. published february second, nineteen twenty two. Ulysses chronicles the peripatetic appointments and encounters of Leopold Bloom in Dublin in the course of an ordinary day."},
    "card": {
      "type": "Standard",
      "title": "Ulysses",
      "text": "Ulysses\nby James Joyce\nPublished February 2, 1922\n Ulysses chronicles the peripatetic appointments and encounters of Leopold Bloom in Dublin in the course of an ordinary day, 16 June 1904. Ulysses is approximately 265,000 words in length and is divided into eighteen episodes. Since publication, the book has attracted controversy and scrutiny, ranging from early obscenity trials to protracted textual 'Joyce Wars'. Ulysses' stream-of-consciousness technique, careful structuring, and experimental prose — full of puns, parodies, and allusions — as well as its rich characterisation and broad humour, made the book a highly regarded novel in the modernist pantheon. Joyce fans worldwide now celebrate 16 June as Bloomsday.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/Ulysses_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/Ulysses_large.jpg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"Beloved by Toni Morrison. published september, nineteen eighty seven. Set after the American Civil War, it is inspired by the story of an African American slave, Margaret Garner, who escaped slavery in Kentucky late January eighteen fifty six by fleeing to Ohio, a free state."},
    "card": {
      "type": "Standard",
      "title": "Beloved",
      "text": "Beloved\nby Toni Morrison\nPublished September 1987\n Set after the American Civil War (1861–1865), it is inspired by the story of an African American slave, Margaret Garner, who escaped slavery in Kentucky late January 1856 by fleeing to Ohio, a free state. In the novel, the protagonist Sethe is also a slave who escapes slavery, running to Cincinnati, Ohio. After twenty-eight days of freedom, a posse arrives to retrieve her and her children under the Fugitive Slave Act of 1850, which gave slave owners the right to pursue slaves across state borders. Sethe kills her two-year-old daughter rather than allow her to be recaptured and taken back to Sweet Home, the Kentucky plantation from which Sethe recently fled. A woman presumed to be her daughter, called Beloved, returns years later to haunt Sethe's home at 124 Bluestone Road, Cincinnati, Ohio. The story opens with an introduction to the ghost: '124 was spiteful. Full of a baby's venom.'",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/Beloved_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/Beloved_large.jpg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"The Lord of the Flies by William Golding. published september, seventeenth nineteen fifty four. A story about a group of British boys stuck on an uninhabited island who try to govern themselves with disastrous results."},
    "card": {
      "type": "Standard",
      "title": "The Lord of the Flies",
      "text": "The Lord of the Flies\nby William Golding\nPublished September 17, 1954\n A story about a group of British boys stuck on an uninhabited island who try to govern themselves with disastrous results.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/Lord-of-the-Flies_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/Lord-of-the-Flies_large.jpg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"1984 by George Orwell. published june eighth, nineteen fourty nine. George Orwell’s chilling prophecy about the future so powerful that it is completely convincing from start to finish."},
    "card": {
      "type": "Standard",
      "title": "1984",
      "text": "1984\nby George Orwell\nPublished June 8, 1949\n George Orwell’s chilling prophecy about the future. And while 1984 has come and gone, Orwell’s narrative is timelier than ever. 1984 presents a startling and haunting vision of the world, so powerful that it is completely convincing from start to finish.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/1984_small.jpeg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/1984_large.jpeg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"The Sound and the Fury by William Faulkner. published nineteen twenty nine. The novel centers on the Compson family, former Southern aristocrats who are struggling to deal with the dissolution of their family and its reputation."},
    "card": {
      "type": "Standard",
      "title": "The Sound and the Fury",
      "text": "The Sound and the Fury\nby William Faulkner\nPublished June 8, 1949\n The novel centers on the Compson family, former Southern aristocrats who are struggling to deal with the dissolution of their family and its reputation. Over the course of the 30 years or so related in the novel, the family falls into financial ruin, loses its religious faith and the respect of the town of Jefferson, and many of them die tragically.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/sound-and-the-fury_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/sound-and-the-fury_large.jpg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"Lolita by Vladmir Nabokov. published nineteen fifty five. Awe and exhiliration, along with heartbreak and mordant wit, abound in Lolita. Nabokov's most famous and controversial novel, which tells the story of the aging Humbert Humbert's obsessive, devouring, and doomed passion for the nymphet Dolores Haze."},
    "card": {
      "type": "Standard",
      "title": "Lolita",
      "text": "Lolita\nby Vladmir Nabokov\nPublished 1955\nAwe and exhiliration--along with heartbreak and mordant wit--abound in Lolita, Nabokov's most famous and controversial novel, which tells the story of the aging Humbert Humbert's obsessive, devouring, and doomed passion for the nymphet Dolores Haze. Lolita is also the story of a hypercivilized European colliding with the cheerful barbarism of postwar America. Most of all, it is a meditation on love--love as outrage and hallucination, madness and transformation.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/Lolita_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/Lolita_large.jpg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"Of Mice and Men by John Steinbeck. published nineteen thirty seven, tells the story of George Milton and Lennie Small, two displaced migrant ranch workers, who move from place to place in California in search of new job opportunities during the Great Depression in the United States."},
    "card": {
      "type": "Standard",
      "title": "Of Mice and Men",
      "text": "Of Mice and Men\nby John Steinbeck\nPublished June 8, 1949\nThe story of George Milton and Lennie Small, two displaced migrant ranch workers, who move from place to place in California in search of new job opportunities during the Great Depression in the United States.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/of-mice-and-men_small.jpeg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/of-mice-and-men_large.jpeg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"Charlotte’s Web by E.B. White. published nineteen fifty two. The novel tells the story of a pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live."},
    "card": {
      "type": "Standard",
      "title": "Charlotte’s Web",
      "text": "Charlotte’s Web\nby E.B. White\nPublished 1952\nThe novel tells the story of a pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur (such as 'Some Pig') in her web in order to persuade the farmer to let him live.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/Charlottes-web_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/Charlottes-web_large.jpg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"A Portrait of the Artist as a Young Man by James Joyce. published december twenty nineth, nineteen sixteen. This novel traces the religious and intellectual awakening of young Stephen Dedalus, a fictional alter ego of Joyce and an allusion to Daedalus, the consummate craftsman of Greek mythology. Stephen questions and rebels against the Catholic and Irish conventions under which he has grown, culminating in his self-exile from Ireland to Europe."},
    "card": {
      "type": "Standard",
      "title": "A Portrait of the Artist as a Young Man",
      "text": "A Portrait of the Artist as a Young Man\nby James Joyce\nPublished December 29, 1916\nThis novel traces the religious and intellectual awakening of young Stephen Dedalus, a fictional alter ego of Joyce and an allusion to Daedalus, the consummate craftsman of Greek mythology. Stephen questions and rebels against the Catholic and Irish conventions under which he has grown, culminating in his self-exile from Ireland to Europe.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/A-Portrait-of-the-Artist-as-a-Young-Man_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/A-Portrait-of-the-Artist-as-a-Young-Man_large.jpg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"Catch twenty two by Joseph Heller. published november tenth, nineteen sixty one. The novel is set during World War two, between nineteen forty two and nineteen forty four. It mainly follows the life of Captain John Yossarian, a U.S. Army Air Forces B twenty five bombardier."},
    "card": {
      "type": "Standard",
      "title": "Catch-22",
      "text": "Catch-22\nby Joseph Heller\nPublished November 10, 1961\n The novel is set during World War II, from 1942 to 1944. It mainly follows the life of Captain John Yossarian, a U.S. Army Air Forces B-25 bombardier. Most of the events in the book occur while the fictional 256th Squadron is based on the island of Pianosa, in the Mediterranean Sea, west of Italy. The novel looks into the experiences of Yossarian and the other airmen in the camp, who attempt to maintain their sanity while fulfilling their service requirements so that they may return home.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/catch-22_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/catch-22_large.jpg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"Brave New World by Aldous Huxley. published nineteen thirty two. Set in London in the year A.D. twenty five fourty, the novel anticipates developments in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning that combine profoundly to change society."},
    "card": {
      "type": "Standard",
      "title": "Brave New World",
      "text": "Brave New World\nby Aldous Huxley\nPublished 1932\nSet in London in the year AD 2540 (632 A.F.—'After Ford'—in the book), the novel anticipates developments in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning that combine profoundly to change society. ",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/Brave-New-World_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/Brave-New-World_large.jpg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"Animal Farm by George Orwell. published august seventeenth, nineteen fourty five. Animal Farm is the most famous by far of all twentieth-century political allegories. Its account of a group of barnyard animals who revolt against their vicious human master, only to submit to a tyranny erected by their own kind, can fairly be said to have become a universal drama."},
    "card": {
      "type": "Standard",
      "title": "Animal Farm",
      "text": "Animal Farm\nby George Orwell\nPublished August 17, 1945\n Animal Farm is the most famous by far of all twentieth-century political allegories. Its account of a group of barnyard animals who revolt against their vicious human master, only to submit to a tyranny erected by their own kind, can fairly be said to have become a universal drama. Orwell is one of the very few modern satirists comparable to Jonathan Swift in power, artistry, and moral authority; in animal farm his spare prose and the logic of his dark comedy brilliantly highlight his stark message.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/Animal-Farm_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/Animal-Farm_large.jpg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"The Sun Also Rises by Ernest Hemingway. published october twenty second, nineteen twenty six. A poignant look at the disillusionment and angst of the post-World War one generation, the novel introduces two of Hemingway's most unforgettable characters, Jake Barnes and Lady Brett Ashley. The story follows the flamboyant Brett and the hapless Jake as they journey from the wild nightlife of nineteenth twenties Paris to the brutal bullfighting rings of Spain with a motley group of expatriates."},
    "card": {
      "type": "Standard",
      "title": "The Sun Also Rises",
      "text": "The Sun Also Rises\nby Ernest Hemingway\nPublished October 22, 1926\nA poignant look at the disillusionment and angst of the post-World War I generation, the novel introduces two of Hemingway's most unforgettable characters: Jake Barnes and Lady Brett Ashley. The story follows the flamboyant Brett and the hapless Jake as they journey from the wild nightlife of 1920s Paris to the brutal bullfighting rings of Spain with a motley group of expatriates. It is an age of moral bankruptcy, spiritual dissolution, unrealized love, and vanishing illusions.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/the-sun-also-rises_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/the-sun-also-rises_large.jpg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"As I Lay Dying by William Faulkner. published nineteen thirty. This novel tells a harrowing account of the Bundren family’s odyssey across the Mississippi countryside to bury Addie, their wife and mother. Considered one of the most influential novels in American fiction in structure, style, and drama."},
    "card": {
      "type": "Standard",
      "title": "As I Lay Dying",
      "text": "As I Lay Dying\nby William Faulkner\nPublished 1930\n This novel tells a harrowing account of the Bundren family’s odyssey across the Mississippi countryside to bury Addie, their wife and mother. Narrated in turn  by each of the family members—including Addie herself—as well as others the novel ranges in mood, from dark comedy to the deepest pathos. Considered one of the most influential novels in American fiction in structure, style, and drama.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/as-i-lay-dying_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/as-i-lay-dying_large.jpg"
      }
    }
  }
},
{
  "version": "1.0",
  "response": {
    "outputSpeech": {"type":"PlainText","text":"A Farewell to Arms by Ernest Hemingway. published nineteen eighteen. In nineteen eighteen, Ernest Hemingway went to war, to the war to end all wars. He volunteered for ambulance service in Italy, was wounded, and twice decorated. Out of his experiences came A Farewell to Arms. Hemingway's description of war is unforgettable. He recreates the fear, the comradeship, the courage of his young American volunteer, and the men and women he meets in Italy with total conviction. But A Farewell to Arms is not only a novel of war. In it, Hemingway has also created a love story of immense drama and uncompromising passion."},
    "card": {
      "type": "Standard",
      "title": "A Farewell to Arms",
      "text": "A Farewell to Arms\nby Ernest Hemingway\nPublished date\n In 1918 Ernest Hemingway went to war, to the war to end all wars. He volunteered for ambulance service in Italy, was wounded, and twice decorated. Out of his experiences came A Farewell to Arms. Hemingway's description of war is unforgettable. He recreates the fear, the comradeship, the courage of his young American volunteer, and the men and women he meets in Italy with total conviction. But A Farewell to Arms is not only a novel of war. In it, Hemingway has also created a love story of immense drama and uncompromising passion.",
      "image": {
        "smallImageUrl": "https://s3.amazonaws.com/alexa-images/books/A-Farewell-to-Arms_small.jpg",
        "largeImageUrl": "https://s3.amazonaws.com/alexa-images/books/A-Farewell-to-Arms_large.jpg"
      }
    }
  }
}
 
    
    

];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * SpaceGeek is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var Book = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Book.prototype = Object.create(AlexaSkill.prototype);
Book.prototype.constructor = Book;

Book.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    //console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Book.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    //console.log("onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewBookRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
Book.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    //console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

Book.prototype.intentHandlers = {
    "GetNewBookIntent": function (intent, session, response) {
        handleNewBookRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say give me a book, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new fact from the list and returns to the user.
 */
function handleNewBookRequest(response) {
    // Get a random space fact from the space facts list
    var bookIndex = Math.floor(Math.random() * BOOKS.length);
    var randomBook = BOOKS[bookIndex];

    // Create speech output
    var speechOutput = "Here's your next book: " + randomBook;
    var cardTitle = "Your Book";
    response.tellWithCard(speechOutput, cardTitle, speechOutput);
    //there might be an error or problem with this code format here:
    randomBook['response']['outputSpeech'];
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the SpaceGeek skill.
    var book = new Book();
    book.execute(event, context);
};

