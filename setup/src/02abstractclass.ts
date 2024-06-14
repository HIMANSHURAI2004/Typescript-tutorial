interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

// class Instagram implements TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ){}
// }

// class Youtube implements TakePhoto, Story{
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         public short: string
//     ){}

//     createStory(): void {
//         console.log("Story was created");
        
//     }
// }


//abstract class
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        return 8
    }
}


class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        ){
            super(cameraMode, filter)
        }

        getSepia(): void {
            console.log("Sepia");
            
        }
}

const abc = new Instagram("test", "Test")

abc.getReelTime()