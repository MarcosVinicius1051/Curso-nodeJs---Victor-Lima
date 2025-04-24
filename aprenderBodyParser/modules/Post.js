import db from "./db.js"

Post.sync({force: false})

const Post = db.sequelize.define("postagens",{
    titutlo:{
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

export default Post