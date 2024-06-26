import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Game.scss';
import BannerImage from '../assets/background.jpg';

function generateHintLetters(word) {
    return word.split('').map((letter, index) => (
        <div key={index} className="letter" value={letter}></div>
    ));
}

function generateWinCondition() {
    const letters = ['E', 'L', 'E', 'P', 'H', 'A', 'N', 'T'];

    return (
        <div className="wincondition">
            {letters.map((letter, index) => (
                <div key={index} className="letter" value={letter}>
                    {index === letters.length - 1 ? <div className="win">Congratulations</div> : null}
                </div>
            ))}
        </div>
    );
}

function Game() {
    const { category } = useParams();
    const [backgroundImage, setBackgroundImage] = useState(null);

    useEffect(() => {
        import(`../assets/${category.toLowerCase()}.jpg`)
            .then(image => setBackgroundImage(image.default))
            .catch(error => console.error(error));
    }, [category]);

    return (
        <>
            <div className="game" style={{ backgroundImage: `url(${BannerImage})` }}>
                <h2 className="category_Game">Category: {category}</h2>
            </div>
            <div className="hangmanGame_Box">
                <div className="hangmanGame_Box_Container">

                    <input type="radio" letter="A" correct="correct" />
                    <input type="radio" letter="B" />
                    <input type="radio" letter="C" />
                    <input type="radio" letter="D" />
                    <input type="radio" letter="E" correct="correct" />
                    <input type="radio" letter="F" />
                    <input type="radio" letter="G" />
                    <input type="radio" letter="H" correct="correct" />
                    <input type="radio" letter="I" />
                    <input type="radio" letter="J" />
                    <input type="radio" letter="K" />
                    <input type="radio" letter="L" correct="correct" />
                    <input type="radio" letter="M" />
                    <input type="radio" letter="N" correct="correct" />
                    <input type="radio" letter="O" />
                    <input type="radio" letter="P" correct="correct" />
                    <input type="radio" letter="Q" />
                    <input type="radio" letter="R" />
                    <input type="radio" letter="S" />
                    <input type="radio" letter="T" correct="correct" />
                    <input type="radio" letter="U" />
                    <input type="radio" letter="V" />
                    <input type="radio" letter="W" />
                    <input type="radio" letter="X" />
                    <input type="radio" letter="Y" />
                    <input type="radio" letter="Z" />
                    
                    <div className="break"></div>
                    <svg className="hangman" viewBox="0 0 96 96">
                        <line className="stage10" x1="62" y1="70" x2="56" y2="56"></line>
                        <line className="stage9" x1="50" y1="70" x2="56" y2="56"></line>
                        <line className="stage8" x1="68" y1="46" x2="56" y2="40"></line>
                        <line className="stage7" x1="44" y1="46" x2="56" y2="40"></line>
                        <line className="stage6" x1="56" y1="40" x2="56" y2="56"></line>
                        <circle className="stage5" cx="56" cy="34" r="6"></circle>
                        <line className="stage4" x1="56" y1="16" x2="56" y2="28"></line>
                        <line className="stage3" x1="24" y1="24" x2="32" y2="16"></line>
                        <line className="stage3" x1="21" y1="16" x2="60" y2="16"></line>
                        <line className="stage2" x1="24" y1="80" x2="24" y2="16"></line>
                        <line className="stage1" x1="16" y1="80" x2="32" y2="80"></line>
                    </svg>
                    
                    <div className="hint">
                        {generateHintLetters('ELEPHANT')}
                    </div>
                    
                    <div className="hangman">
                        <div className="lose stage10">
                            <div>
                                <div className="top">Commiserations</div>
                                <div className="bottom">Word was elephant</div>
                            </div>
                        </div>
                    </div>
                    
                    {generateWinCondition()}
                </div>
            </div>
        </>
    );
}

export default Game;