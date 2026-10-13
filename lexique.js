// =========================================================================
// LEXIQUE OFFICIEL DE LA CROLECTE FENDANI
// =========================================================================
// Pour ajouter un mot, duplique un bloc { ... } en mettant une virgule entre chacun.

const dictionnaire = [
    {
        id: "senear",
        caló: "senear",
        caló_api: "[seneˈaɾ]",
        français: "<i>être, se situer</i>",
        français_api: "[ɛtʁ]",
        etymologie: "de l'ancien calo sinelar",
        
        // --- NOUVELLES RUBRIQUES ---
        siecle: "XVIe siècle",
        premiere_attestation: "1545",
        observation: "Verbe auxiliaire et locatif très fréquent dans les parlers caló contemporains.",
        antonymes: ["partir", "disparaître"],
        conjugaison_html: `
            <div style="display: flex; flex-direction: column; align-items: center; width: 100%; font-family: 'Syne', system-ui, sans-serif;">
                <div style="max-width: 450px; width: 100%; margin-bottom: 14px; font-size: 0.78em; color: #475569; line-height: 1.5; text-align: justify; background: rgba(197,160,89,0.04); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(197,160,89,0.2);">
                    La conjugaison caló est particulièrement ardue, car elle repose sur des temps et des pronoms que l'on n'utilise pas en français. 
                    Voici la <a href="#" style="color: #8B263E; font-weight: 600; text-decoration: underline;">conjugaison simplifiée</a>, conforme au tableau ci-dessous, et la <a href="index.html?verbe=senear" style="color: #8B263E; font-weight: 600; text-decoration: underline;">conjugaison normative</a>, plus difficile d'accès.
                </div>
                <div style="overflow-x:auto; width: 100%; display: flex; justify-content: center;">
                    <table style="width:100%; max-width: 450px; border-collapse: separate; border-spacing: 0; text-align: left; font-size: 0.85em; border-radius: 7px; overflow: hidden; box-shadow: 0 3px 12px rgba(30,41,59,0.04); border: 1px solid rgba(197,160,89,0.3);">
                        <thead>
                            <tr style="background: linear-gradient(135deg, rgba(139,38,62,0.06), rgba(197,160,89,0.08));">
                                <th style="padding: 12px 15px; border-bottom: 2px solid #C5A059; font-weight: 600; color: #8B263E; letter-spacing: 0.3px;">Présent</th>
                                <th style="padding: 12px 15px; border-bottom: 2px solid #C5A059; font-weight: 600; color: #1E293B; letter-spacing: 0.3px;">Traduction</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="transition: background 0.2s;"><td style="padding: 10px 15px; border-bottom: 1px solid rgba(30,41,59,0.06); color: #1E293B;">seneo</td><td style="padding: 10px 15px; border-bottom: 1px solid rgba(30,41,59,0.06); color: #475569;">je suis</td></tr>
                            <tr style="transition: background 0.2s;"><td style="padding: 10px 15px; border-bottom: 1px solid rgba(30,41,59,0.06); color: #1E293B;">senes</td><td style="padding: 10px 15px; border-bottom: 1px solid rgba(30,41,59,0.06); color: #475569;">tu es</td></tr>
                            <tr><td style="padding: 10px 15px; color: #1E293B;">sene</td><td style="padding: 10px 15px; color: #475569;">il / elle est</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,

        phrase_calo_masc: "seneo a Parise",
        phrase_fran_masc: "je suis à Paris",
        phrase_calo_fem: "",
        phrase_fran_fem: "",
        synonymes: ["se situer"],
        audio_masc: "senear-masc.mp3",
        audio_fem: "senear-fem.mp3",
        audio_phrase_calo_masc: "seneo-a-parise.mp3",
        audio_phrase_fran_masc: "jesuisaparis.mp3",
    },
    {
        id: "se situer",
        caló: "se situer",
        caló_api: "[seneˈaɾ]",
        français: "<i>senear</i>",
        français_api: "[ɛtʁ]",
        etymologie: "forme pronominale de situer, issu du latin médiéval situare",
        
        // --- NOUVELLES RUBRIQUES ---
        siecle: "XVIIe siècle",
        premiere_attestation: "1632",
        observation: "Variante d'emprunt lexical utilisée pour insister sur la position géographique précise.",
        antonymes: ["errer", "flotter"],
        conjugaison_html: `
           
                <div style="overflow-x:auto; width: 100%; display: flex; justify-content: center;">
                    <table style="width:100%; max-width: 450px; border-collapse: separate; border-spacing: 0; text-align: left; font-size: 0.85em; border-radius: 7px; overflow: hidden; box-shadow: 0 3px 12px rgba(30,41,59,0.04); border: 1px solid rgba(197,160,89,0.3);">
                        <thead>
                            <tr style="background: linear-gradient(135deg, rgba(139,38,62,0.06), rgba(197,160,89,0.08));">
                                <th style="padding: 12px 15px; border-bottom: 2px solid #C5A059; font-weight: 600; color: #8B263E; letter-spacing: 0.3px;">Présent</th>
                                <th style="padding: 12px 15px; border-bottom: 2px solid #C5A059; font-weight: 600; color: #1E293B; letter-spacing: 0.3px;">Traduction</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="transition: background 0.2s;"><td style="padding: 10px 15px; border-bottom: 1px solid rgba(30,41,59,0.06); color: #1E293B;">me sene</td><td style="padding: 10px 15px; border-bottom: 1px solid rgba(30,41,59,0.06); color: #475569;">je me situe</td></tr>
                            <tr style="transition: background 0.2s;"><td style="padding: 10px 15px; border-bottom: 1px solid rgba(30,41,59,0.06); color: #1E293B;">te senes</td><td style="padding: 10px 15px; border-bottom: 1px solid rgba(30,41,59,0.06); color: #475569;">tu te situes</td></tr>
                            <tr><td style="padding: 10px 15px; color: #1E293B;">se sene</td><td style="padding: 10px 15px; color: #475569;">il / elle se situe</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,

        phrase_calo_masc: "Madrid sene en España",
        phrase_fran_masc: "Madrid se situe en Espagne",
        phrase_calo_fem: "",
        phrase_fran_fem: "",
        synonymes: ["se situer"],
        audio_masc: "sesituermec.mp3",
        audio_fem: "sesituerfem.mp3",
        audio_phrase_calo_masc: "sene.mp3",
        audio_phrase_fran_masc: "sesitue.mp3",
    },
    {
        id: "linar",
        caló: "linar",
        caló_api: "[linˈaɾ]",
        français: "<i>écrire</i>",
        français_api: "[ɛtʁ]",
        etymologie: "de l'ancien calo <i>libanar</i>",
        
        // --- RUBRIQUES LINGUISTIQUES ---
        siecle: "XVIIIe siècle",
        premiere_attestation: "1789",
        observation: "Verbe fondamental lié à la transmission écrite et à l'expression littéraire de la crolecte, doté d'un système paradigmatique complet (duel, impersonnel, vouvoiement).",
        antonymes: ["effacer", "oublier"],
        
        // --- TABLEAU DE CONJUGAISON HTML (PRÉSENT EXCLUSIF) ---
        conjugaison_html: `
            <div style="display: flex; flex-direction: column; align-items: center; width: 100%; font-family: 'Syne', system-ui, sans-serif;">
                <div style="max-width: 450px; width: 100%; margin-bottom: 14px; font-size: 0.78em; color: #475569; line-height: 1.5; text-align: justify; background: rgba(197,160,89,0.04); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(197,160,89,0.2);">
                    La conjugaison caló est particulièrement ardue, car elle repose sur des temps et des pronoms que l'on n'utilise pas en français. 
                    Voici la <a href="#" style="color: #8B263E; font-weight: 600; text-decoration: underline;">conjugaison simplifiée</a>, conforme au tableau ci-dessous, et la <a href="index.html?verbe=linar" style="color: #8B263E; font-weight: 600; text-decoration: underline;">conjugaison normative</a>, plus difficile d'accès.
                </div>
                <div style="margin: 0; max-width: 450px; width: 100%; font-size: 0.81em;">
                    <div style="background: #FFFFFF; border-radius: 10px; border: 1px solid rgba(197, 160, 89, 0.4); box-shadow: 0 8px 22px rgba(30, 41, 59, 0.04); overflow: hidden; display: flex; flex-direction: column;">
                        <div style="background: linear-gradient(135deg, #8B263E 0%, #6d1e31 100%); color: #FFFFFF; padding: 12px 15px; font-weight: 600; font-size: 0.95em; letter-spacing: 0.5px; border-bottom: 2px solid #C5A059;">
                            Présent de l'indicatif (Linar)
                        </div>
                        <div style="padding: 14px; display: flex; flex-direction: column; gap: 8px; color: #1E293B; background: #FDFBF7; flex-grow: 1;">
                            
                            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(197,160,89,0.15); padding-bottom: 7px;">
                                <span style="color: #64748B; font-size: 0.88em;">Mene (je)</span>
                                <span style="font-weight: 500;">lin<span style="background: rgba(197,160,89,0.18); color: #8B263E; padding: 2px 5px; border-radius: 4px; font-weight: 600;">o</span></span>
                            </div>
                            
                            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(197,160,89,0.15); padding-bottom: 7px;">
                                <span style="color: #64748B; font-size: 0.88em;">Tú (tu)</span>
                                <span style="font-weight: 500;">lin<span style="background: rgba(197,160,89,0.18); color: #8B263E; padding: 2px 5px; border-radius: 4px; font-weight: 600;">as</span></span>
                            </div>
                            
                            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(197,160,89,0.15); padding-bottom: 7px;">
                                <span style="color: #64748B; font-size: 0.88em;">Huno / Hira (il / elle)</span>
                                <span style="font-weight: 500;">lin<span style="background: rgba(197,160,89,0.18); color: #8B263E; padding: 2px 5px; border-radius: 4px; font-weight: 600;">a</span></span>
                            </div>

                            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(197,160,89,0.15); padding-bottom: 7px;">
                                <span style="color: #64748B; font-size: 0.88em;">Mane (nous)</span>
                                <span style="font-weight: 500;">lin<span style="background: rgba(197,160,89,0.18); color: #8B263E; padding: 2px 5px; border-radius: 4px; font-weight: 600;">amo</span></span>
                            </div>

                            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(197,160,89,0.15); padding-bottom: 7px;">
                                <span style="color: #64748B; font-size: 0.88em;">Sane (vous)</span>
                                <span style="font-weight: 500;">lin<span style="background: rgba(197,160,89,0.18); color: #8B263E; padding: 2px 5px; border-radius: 4px; font-weight: 600;">ai</span></span>
                            </div>

                            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(197,160,89,0.15); padding-bottom: 7px;">
                                <span style="color: #64748B; font-size: 0.88em;">Hunos / Hiras (ils / elles)</span>
                                <span style="font-weight: 500;">lin<span style="background: rgba(197,160,89,0.18); color: #8B263E; padding: 2px 5px; border-radius: 4px; font-weight: 600;">an</span></span>
                            </div>

                            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(197,160,89,0.15); padding-bottom: 7px;">
                                <span style="color: #64748B; font-size: 0.88em;">Oste (vous singulier / vouvoiement)</span>
                                <span style="font-weight: 500;">lin<span style="background: rgba(197,160,89,0.18); color: #8B263E; padding: 2px 5px; border-radius: 4px; font-weight: 600;">ea</span></span>
                            </div>

                            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(197,160,89,0.15); padding-bottom: 7px;">
                                <span style="color: #64748B; font-size: 0.88em;">Ostes (vous pluriel)</span>
                                <span style="font-weight: 500;">lin<span style="background: rgba(197,160,89,0.18); color: #8B263E; padding: 2px 5px; border-radius: 4px; font-weight: 600;">ean</span></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        `,

        phrase_calo_masc: "me mola linar",
        phrase_fran_masc: "j'adore écrire",
        phrase_calo_fem: "",
        phrase_fran_fem: "",
        synonymes: "",
        audio_masc: "linarmasc.mp3",
        audio_fem: "linarfem.mp3",
        audio_phrase_calo_masc: "memolalinar.mp3",
        audio_phrase_fran_masc: "jadoreecrire.mp3",
    }
];

// Note de bas de page : tous droits réservés