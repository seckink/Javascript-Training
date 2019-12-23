class Github {

    constructor(){
        this.url = "https://api.github.com/users/";
    }

   async getGithubData(userName){
        const responseUser = await fetch(this.url + userName);
        console.log(responseUser);
        const responseRepo = await fetch(this.url + userName + "/repos");

        const userData = await responseUser.json();
        const repoData = await responseRepo.json();


        return {
            user:userData,
            repo:repoData
        }
    }
}