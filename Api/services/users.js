class Users {
    IDList = [];
    get users() {return this.IDList};
    login = (userID) => this.IDList.push(userID);
    logout = (userID) => {
        const exists = this.IDList.find(id => id === userID);
        if (!exists) return;

        const index = this.IDList.findIndex(id => id === userID);
        this.IDList.splice(index, 1);
    }
    isLoggedIn = (userID) => {
        return this.IDList.find(id => userID === id);
    }
}

export default new Users();