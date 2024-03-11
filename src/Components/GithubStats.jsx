import React, { useEffect, useState } from 'react';
import { VictoryPie } from 'victory';
import { VictoryTooltip } from "victory-tooltip";
const LanguagesStats = () => {
    const [languageStats, setLanguageStats] = useState([]);
    const [label, setLabel] = useState(false);
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
            <h5 className='align-self-start'>Programming Languages and Frameworks Statistics from GIT repositories</h5>
            <div style={{ maxWidth: '100%' }} className='col-lg-7 col-9'>

                <VictoryPie
                    colorScale={["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff", "#ff9f40", "#80ff80", "#ff6666", "#6699ff", "#ff9999"]}
                    data={languageStats}
                    // animate={{
                    //     duration: 2000
                    // }}
                    cornerRadius={2}
                    innerRadius={(val) => {
                        return val.datum.x === "firefox" ? 170 : 170;
                      }}
                    labelRadius={80}
                    labelPlacement="parallel" // Place les étiquettes à l'extérieur et les relie avec des lignes
                    labels={({ datum }) => `${datum.x} : \n ${(datum.y / languageStats.reduce((acc, curr) => acc + curr.y, 0) * 100).toFixed(2)}%`}
                    style={{
                        labels: {
                            fill: 'white',
                            fontWeight: 'bold',
                        },
                        parent: {
                            userSelect: 'none' // Pour empêcher la sélection accidentelle des étiquettes
                        }
                    }}
                    tooltip={"dshv"}
                    padAngle={({ datum }) => 2}
                    labelComponent={
                        label ? <VictoryTooltip dy={0} centerOffset={{ x: 25 }} /> : undefined
                      }
                />

            </div>
        </div>
    );
};

export default LanguagesStats;
