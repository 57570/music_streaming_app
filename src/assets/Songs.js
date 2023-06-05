var audio1 = new Audio("/1.mp3")
var audio2 = new Audio("/2.mp3")
var audio3 = new Audio("/3.mp3")
var audio4 = new Audio("/4.mp3")
var audio6 = new Audio("/6.mp3")
var audio7 = new Audio("/7.mp3")
var audio14 = new Audio("/14.mp3")
var audio9 = new Audio("/9.mp3")
var audio10 = new Audio("/10.mp3")

const arr = [``]

const songs = [
    {
        id:1,
        songName: "On my way",
        Artist: "Alan walker",
        poster: "/1.jpg",
        Song: audio1,
        duration:{
            minute:3,
            second:36
        },
       lyrics:`I'm sorry but
       Don't wanna talk, I need a moment 'fore I go
       It's nothing personal
       I draw the blinds
       They don't need to see me cry
       'Cause even if they understand
       They don't understand
       So then when I'm finished
       I'm all 'bout my business and ready to save the world
       I'm taking my misery
       Make it my bitch, can't be everyone's favorite girl
       So take aim and fire away
       I've never been so wide awake
       No, nobody but me can keep me safe
       And I'm on my way
       The blood moon is on the rise
       The fire burning in my eyes
       No, nobody but me can keep me safe
       And I'm on my way
       Lo siento mucho (Farru), pero me voy
       Porque a tu lado me di cuenta que nada soy
       Y me cansé de luchar y de guerrear en vano
       De estar en la línea de fuego y de meter la mano
       Acepto mis errores, también soy humano
       Y tú no ve' que lo hago porque te amo
       Pero ya (Ya) no tengo más na' que hacer aquí (aquí)
       Me voy, llegó la hora 'e partir (partir)
       De mi propio camino, seguir lejos de ti
       So take aim and fire away
       I've never been so wide awake
       No, nobody but me can keep me safe
       And I'm on my way
       The blood moon is on the rise (is on the rise, na-na)
       The fire burning in my eyes (the fire burning in my eyes)
       No, nobody but me can keep me safe
       And I'm on my way
       I'm on my way
       Everybody keep me safe
       Everybody keep me safe
       Everybody keep me safe
       Everybody, everybody on my way
       So take aim and fire away
       I've never been so wide awake
       No, nobody but me can keep me safe
       And I'm on my way
       The blood moon is on the rise
       The fire burning in my eyes
       No, nobody but me can keep me safe
       And I'm on my way`
    },
    {
        id:2,
        songName:"Alan walker-Fade",
        Artist:"Alan walker",
        poster:"/2.jpg",
        Song: audio2,
        duration:{
            minute:3,
            second:32
        },
        lyrics:`You were the shadow to my light
        Did you feel us?
        Another star, you fade away
        Afraid our aim is out of sight
        Wanna see us alight
        
        [Pre-Chorus]
        Where are you now?
        Where are you now?
        Where are you now?
        Was it all in my fantasy?
        Where are you now?
        Were you only imaginary?
        
        [Chorus]
        Where are you now?
        Atlantis, under the sea, under the sea
        Where are you now? Another dream
        The monster's running wild inside of me
        I'm faded, I'm faded
        So lost, I'm faded, I'm faded
        So lost, I'm faded
        
        [Verse 2]
        These shallow waters never met what I needed
        I'm letting go, a deeper dive
        Eternal silence of the sea
        I'm breathing, alive
        
        You might also like
        Jimmy Cooks
        Drake
        Falling Back
        Drake
        SHOOTING STAR
        XG
        
        [Pre-Chorus]
        Where are you now?
        Where are you now?
        Under the bright but faded lights
        You set my heart on fire
        Where are you now?
        Where are you now?
        
        [Chorus]
        Where are you now?
        Atlantis, under the sea, under the sea
        Where are you now? Another dream
        The monster's running wild inside of me
        I'm faded, I'm faded
        So lost, I'm faded, I'm faded
        So lost, I'm faded`

    },
    {
        id:3,
        songName:"Cartoon - On & On",
        Artist:"Daniel Levi",
        poster:"/3.jpg",
        Song: audio3,
        duration:{
            minute:3,
            second:28
        },
        lyrics:`Hold me close 'til I get up
        Time is barely on our side
        I don't wanna waste what's left
        The storms we chase are leading us
        And love is all we'll ever trust, yeah
        No, I don't wanna waste what's left
        And on and on we'll go
        Through the wastelands, through the highways
        'Til my shadow turns to sun rays
        And on and on we'll go
        Through the wastelands, through the highways
        And on and on we'll go
        Oh, on we'll go
        Finding life along the way
        Melodies we haven't played
        No, I don't want no rest
        Echoin' around these walls
        Fighting to create a song (yeah)
        I don't wanna miss a beat
        And on and on we'll go
        Through the wastelands, through the highways
        'Til my shadow turns to sun rays
        And on and on we'll go
        Through the wastelands, through the highways
        And on and on we'll go
        And we'll grow in number
        Fueled by thunder, see the horizon
        Turn us to thousands
        And we'll grow in number
        Fueld by thunder, see the horizon
        Turn us to thousands
        And on and on we'll go
        Through the wastelands, through the highways
        'Til my shadow turns to sun rays
        And on and on we'll go
        Through the wastelands, through the highways
        And on and on we'll go`
    },
    {
        id:4,
        songName:"Warriyo - Mortals",
        Artist:"Mortals",
        poster:"/4.jpg",
        Song: audio4,
        duration:{
            minute:3,
            second:50
        },
        lyrics:`Stranded in the open
        Dried out tears of sorrow
        Lacking all emotion
        Staring down the barrel waiting for the
        Final gates to open
        To a new tomorrow
        Moving with the motion
        Following the light that sets me free
        Sets me free`
    },{
        id:5,
        songName:"Electronic song",
        Artist:"Electro",
        poster:"/6.jpg",
        Song: audio6,
        duration:{
            minute:4,
            second:27
        },
        lyrics:"     "
    },{
        id:6,
        songName:"Agar tum sath ho",
        Artist:"Tamashaa",
        poster:"/7.jpg",
        Song: audio7,
        duration:{
            minute:5,
            second:41
        },
        lyrics:`[Verse 1: Alka Yagnik]
        Pal bhar thehar jaao
        Dil ye sambhal jaaye
        Kaise tumhe roka karu
        
        Meri taraf aata har gam phisal jaaye
        Aakhon mein tumko bharu
        Bin bole baatein tumse karu
        
        Agar tum saath ho
        Agar tum saath ho
        
        [Instrumental]
        
        [Hook: Alka Yagnik]
        Behti rehti nahar, nadiya si
        Teri duniya mein
        Meri duniya hai teri chahton mein
        Main dhal jaati hu teri adaton mein
        Agar tum saath ho
        
        [Chorus: Arijit Singh]
        Teri nazron mein hain tere sapne
        Tere sapno mein hain naraazi
        Mujhe lagta hai ke baatein dil ki
        Hoti lafzon ki dhokhe-baazi
        Tum saath ho ya na ho, kya fark hai?
        Bedard thi zindagi, bedard hai`
    },
    {
        id:7,
        songName:"Vaaste",
        Artist:"Dhvani Bhanushali",
        poster:"/14.jpg",
        Song: audio14,
        duration:{
            minute:3,
            second:16
        },
        lyrics:`Vaaste Jaan Bhi Du
        Main Gawah Emaan Bhi Du
        Kismato Ka Likha Mod Du
        
        Badle Mein Main Tere
        Jo Khuda Khud Bhi De
        Jannate Sach Kahu Chhod Du
        
        Tumse Zaada Main Na Jaanu
        Tumse Khud Ko Main Pehchanu
        Tumko Bas Main Apna Maanu Mahiya
        
        Vaaste Jaan Bhi Du
        Main Gawah Emaan Bhi Du
        Kismato Ka Likha Mod Du
        
        Tere Alava Koi Bhi Khawish
        Nahi Hai Baaki Dil Mein
        Kadam Uthau Jaha Bhi Jaau
        Tujhi Se Jaau Millne
        
        Tere Liye Mera Safar
        Tere Bina Main Jaau Kidhar
        
        Tumse Zaada Main Na Jaanu
        Tumse Khud Ko Main Pehchanu
        Tumko Bas Main Apna Maanu Mahiya
        
        Vaste Jaan Bhi Du
        Main Gawah Emaan Bhi Du
        Kismato Ka Likha Mod Du
        
        Badle Mein Main Tere
        Jo Khuda Khud Bhi De
        Jannate Sach Kahu Chhod Du
        
        Tu Hi Hai Sawera Mera
        Tu Hi Kinara Mera
        Tu Hi Hai Dariya Mera
        Khuda Ka Jariya Mera
        Tujhi Se Hota Shuru
        Ye Mera Kaarwan
        Tujhi Pe Jaake Khatam
        Ye Mera Saara Jaha
        
        Vaaste Jaan Bhi Du
        Main Gawah Emaan Bhi Du
        Kismato Ka Likha Mod Du
        
        
        `
    },
    {
        id:8,
        songName:"Dilbar",
        Artist:"Dhvani Bhanushali",
        poster:"/9.jpg",
        Song: audio9,
        duration:{
            minute:3,
            second:4
        },
        lyrics:`Dilbar Dilbar
        Dilbar Dilbar..
        
        Chadha Jo Mujhpe Suroor Hai
        Asar Tera Yeh Zaroor Hai
        Teri Nazar Ka Kasoor Hai
        Dilbar Dilbar
        
        Aa Pass Aa Tu Kyu Door Hai
        Yeh Ishq Ka Jo Fitoor Hai
        Nashe Mein Dil Tere Choor Hai
        Dilbar Dilbar
        
        Ab Toh Hosh Na Khabar Hai
        Yeh Kaisa Asar Hai
        Hosh Na Khabar Hai
        Yeh Kaisa Asar Hai
        
        Tumse Milne Ke Baad Dilbar
        Tumse Milne Ke Baad Dilbar
        Dilbar Dilbar Dilbar Dilbar
        Dilbar Dilbar Dilbar Dilbar
        
        Karti Katal Na Aise Tu Chal
        Paheli Ka Iss Nikalo Koi Hal
        Husan Ka Pitara Khilta Kamal
        Kar Le Na Sabar
        Kyunki Meetha Hai Phal
        
        Tu Mera Khwaab Hai
        Tu Mere Dil Ka Karaar
        Dekh Le Jaaneman
        Dekh Le Bas Ek Baar
        
        Chain Kho Gaya Hai
        Kuch Toh Ho Gaya Hai
        Chain Kho Gaya Hai
        Kuch Toh Ho Gaya Hai
        
        Tumse Milne Ke Baad Dilbar
        Tumse Milne Ke Baad Dilbar
        
        Aa Yeah!
        
        Lady!
        
        Ab Toh Hosh Na Khabar Hai
        Yeh Kaisa Asar Hai
        Hosh Na Khabar Hai
        Yeh Kaisa Asar Hai
        
        Tumse Milne Ke Baad Dilbar
        Tumse Milne Ke Baad Dilbar
        Dilbar Dilbar..
        
        
        Dilbar Music Video
        
        
        `
    },
    {
        id:9,
        songName:"Luka Chhupi",
        Artist:"Arijit Singh",
        poster:"/10.jpg",
        Song: audio10,
        duration:{
            minute:3,
            second:42
        },
        lyrics:`Bulave tujhe yaar ajj meri galiyan
        Basaun tere sang main alag duniya
        
        Bulave tujhe yaar ajj meri galiyan
        Basaun tere sang main alag duniyaa
        
        Na aayein kabhi dono
        
        mein zara bhi faasle
        Bas ek tu ho, ek main hoon aur koyi na
        Hai mera sab kuchh tera tu samajh le
        Tu chaahe mere hakk ki zameen rakh le
        Tu saanson pe bhi naam tera likh de
        Main jiyun jab jab tera dil dhadke
        
        
        Jis’se mera yeh jee nahi bharta
        Kuchh bhi nahi asar ab karta
        Meri raah tujhse, meri chaah tujhse
        Mujhe bas yahin reh jaana
        
        Hai tu hi dil jaan hai meri ab se
        Na zikra tera na jaaye mere lab se
        Bulave tujhe yaar ajj meri galiyan
        Basaun tere sang main alag duniya
        
        Jo hove tu dass mujhe dekhe hass ke
        
        Tu chaahe mere hakk ki zameen rakh le
        Tu saanson pe bhi naam tera likh de
        Main jiyun jab jab tera dil dhadke
        
        
        Pyar di raawan utte
        Yaar tu le aaya
        Mainu jeene da matlab
        
        Aaj samajh aaya
        `
    },
]

export default songs