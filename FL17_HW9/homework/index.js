//write your code here

class Magazine {
    constructor() {
        this.articles = [];
        this.followers = [];
        this.state = new ReadyForPushNotification();
    }
}

class States {
    constructor(state) {
        this.state = state;
    }
}

class ReadyForPushNotification extends States {
    constructor() {
        super('ReadyForPush');
    }
}