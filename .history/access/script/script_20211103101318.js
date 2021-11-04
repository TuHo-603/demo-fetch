// const users = [{
//         id: 1,
//         name: 'John',
//     },
//     {
//         id: 2,
//         name: 'Lewis',
//     },
//     {
//         id: 3,
//         name: 'Jason',
//     },
//     {
//         id: 4,
//         name: 'Cain',
//     }
// ];

// const comments = [{
//         id: 1,
//         user_id: 1,
//         content: 'something - 1'
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'something - 2'
//     },
//     {
//         id: 3,
//         user_id: 4,
//         content: 'something - 3'
//     },
//     {
//         id: 4,
//         user_id: 4,
//         content: 'something - 4'
//     }
// ]

// let getcomments = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(comments);
//         }, 1000);
//     });
// };
// getcomments()
//     .then((comments) => {
//         let getIds = comments.map((comment) => {
//             return comment.user_id;
//         });
//         return getUsersbyIds(getIds)
//             .then((users) => {
//                 return {
//                     users: users,
//                     comments: comments
//                 }
//             })
//     })
//     .then((data) => {
//         let comment = document.getElementById('comment-box');
//         let htmls = '';
//         data.comments.forEach((comment) => {
//             let user = data.users.find(user => user.id === comment.user_id);
//             return htmls += `<li>${user.name}: ${comment.content}</li>`;
//         });

//         comment.innerHTML = htmls;
//     });
// const getUsersbyIds = (getIds) => {
//     return new Promise((resolve) => {
//         let result = users.filter((user) => {
//             return getIds.includes(user.id);
//         });
//         setTimeout(resolve(result), 1000);
//     });
// };
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((parse) => {
//         return parse.json();
//     })
//     .then((result) => {
//         console.log(result);
//         let html = result.map((item, index) => {
//             return `
//              <li>${index + 0}: ${item.name}</li>
//              <li>${item.email}</li>
//              <li>${item.website}</li>
//              <li>${item.company.name}</li>
//             `;
//         });
//         document.getElementById('comment-box').innerHTML = html;
//     });