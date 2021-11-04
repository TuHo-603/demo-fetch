const users = [{
        id: 1,
        name: 'John',
    },
    {
        id: 2,
        name: 'Lewis',
    },
    {
        id: 3,
        name: 'Jason',
    },
    {
        id: 4,
        name: 'Cain',
    }
];

const comments = [{
        id: 1,
        user_id: 1,
        comments: 'something - 1'
    },
    {
        id: 2,
        user_id: 2,
        comments: 'something - 2'
    },
    {
        id: 3,
        user_id: 4,
        comments: 'something - 3'
    }
]

let getcomments = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments);
            console.log(comments);
        }, 1000);
    });
};
getcomments()
    .then((comments) => {
        let getIds = comments.map((comment) => {
            return comment.user_id;
        });
        return getIds;
    });