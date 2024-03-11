
import React, { useEffect, useState } from 'react';
import { VictoryPie } from 'victory';

const LanguagesStats = () => {
    const [languageStats, setLanguageStats] = useState([]);
    useEffect(() => {
         fetch('https://api.github.com/user/repos', {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_URL}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const stats = {};

                data.forEach((repo) => {
                    const language = repo.language;
                    if (language) {
                        if (stats[language]) {
                            stats[language]++;
                        } else {
                            stats[language] = 1;
                        }
                    }
                });

                const languageStatsData = Object.entries(stats).map(([language, count]) => ({
                    x: language,
                    y: count,
                }));

                setLanguageStats(languageStatsData);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des dépôts', error);
            });
    }, []);

    return (
        <div className='container d-flex flex-column align-items-center'>
            <h5 className='align-self-start'>Programming Languages Statistics</h5>
            <div style={{ maxWidth: '100%' }} className='col-lg-7'>

                <VictoryPie
                    colorScale={["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff", "#ff9f40", "#80ff80", "#ff6666", "#6699ff", "#ff9999"]}
                    data={languageStats}
                    // animate={{
                    //     duration: 2000
                    // }}
                    cornerRadius={2}
                    innerRadius={60}
                    labels={({ datum }) => `${datum.x}: \n ${(datum.y / languageStats.reduce((acc, curr) => acc + curr.y, 0) * 100).toFixed(2)}%`}
                    labelRadius={80}
                    style={{
                        labels: {
                            fill: '#000',
                            fontWeight: 'bold',
                           padding: '5px', // Augmentez ou diminuez cette valeur selon vos besoins
                            // textAnchor: 'middle',
                        }
                    }}
                />

            </div>
        </div>
    );
};

export default LanguagesStats;
