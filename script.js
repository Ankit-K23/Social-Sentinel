function isfakeacc(user) {

    if(user.followersCount > 1000000000){
        return true;
    }

    if(user.postsCount === 0){
        return true;
    }

    if(!user.isVerified && !user.profilepic){
        return true;
    }

    const currentDate = new Date();
    const creationDate = new Date(user.creationDate);
    const accountAgeInDays = Math.floor((currentDate - creationDate) / (1000 * 60 * 60 * 24));

    if (accountAgeInDays < 10) {
        return true;
    }

    return false;

}

const users = [
    {
        username: "ankit._.atcc",
        followersCount: 88,
        postsCount: 0,
        isVerified: false,
        profilepic: "a.jpg",
        creationDate: '2021-12-01',
    },
    {
        username: 'strange_gamer_yt_',
        followersCount: 1314,
        postsCount: 4,
        isVerified: false,
        profilepic: 'https://example.com/user2.jpg',
        creationDate: '2020-07-01',
    },
    {
        username: 'shubham_bhatti_11',
        followersCount: 436,
        postsCount: 39,
        isVerified: false,
        profilepic: 'https://example.com/user3.jpg',
        creationDate: '2020-07-01',
    },
    {
        username: 'ig._.panda24',
        followersCount: 25,
        postsCount: 1,
        isVerified: false,
        profilepic: 'https://example.com/user4.jpg',
        creationDate: '2022-10-01',
    },
    {
        username: 'krish_prajapati_07_',
        followersCount: 275,
        postsCount: 2,
        isVerified: false,
        profilepic: 'https://example.com/user5.jpg',
        creationDate: '2020-12-01',
    },
    {
        username: 'harshvyas12324',
        followersCount: 134,
        postsCount: 3,
        isVerified: false,
        profilepic: 'https://example.com/user6.jpg',
        creationDate: '2021-11-01',
    },
    {
        username: 'chandni._.05',
        followersCount: 101,
        postsCount: 1,
        isVerified: false,
        profilepic: 'https://example.com/user7.jpg',
        creationDate: '2019-08-01',
    },
    {
        username: 'sltietrajkot',
        followersCount: 1373,
        postsCount: 491,
        isVerified: false,
        profilepic: 'https://example.com/user8.jpg',
        creationDate: '2018-10-01',
    },
    {
        username: 'smit_o7',
        followersCount: 103,
        postsCount: 2,
        isVerified: false,
        profilepic: 'https://example.com/user9.jpg',
        creationDate: '2023-10-01',
    },
    {
        username: 'narendramodi',
        followersCount: 80700000,
        postsCount: 668,
        isVerified: true,
        profilepic: 'https://example.com/user10.jpg',
        creationDate: '2014-11-01',
    },
];


function detect() {
    const useridinput = document.getElementById('useridinput').value;
    const user = users.find(u => u.username === useridinput);
    const result = document.getElementById('result'); 

    if(user){
        if(isfakeacc(user)) {
            result.innerHTML = `user ${useridinput} might be fake. `;
        } else {
            result.innerHTML = `user ${useridinput} appears legitimate.`;
        }

        document.getElementById('username').textContent = user.username;
        document.getElementById('followersCount').textContent = user.followersCount;
        document.getElementById('postsCount').textContent = user.postsCount;
        document.getElementById('isVerified').textContent = user.isVerified ? 'Yes' : 'No';
        document.getElementById('profilePicture').src = user.profilepic;
        document.getElementById('creationDate').textContent = user.creationDate;

        userDetailsContainer.style.display = 'block';
        boxx.style.display = 'flex';

    } else {
        result.innerHTML = `user ${useridinput} not found. `;
        userDetailsContainer.style.display = 'none';
    }

}
