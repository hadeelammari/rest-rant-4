const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
           <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/steak.jpg" alt="steak-image" />
                    <img src ="/images/cake.jpg" alt="cake image" />
                <div>
                    Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
            </div>
        </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>

        </Def>
    )
}

module.exports = home