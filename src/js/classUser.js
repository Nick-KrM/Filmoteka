class User {
  constructor(userId, userName, userPass, isOnline) {
    this.userId = userId;
    this.userName = userName;
    this.userPass = userPass;
    this.isOnline = isOnline;
    this.lib = {
      watched: { results: [] },
      queue: { results: [] },
    };
  }
}

export default User;
