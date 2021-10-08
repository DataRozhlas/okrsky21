const parties = { "part_1": { "naz": "Klub angažovaných nestraníků", "zkr": "KAN" }, "part_2": { "naz": "Strana nezávislosti ČR", "zkr": "SNČR" }, "part_3": { "naz": "CESTA ODPOVĚDNÉ SPOLEČNOSTI", "zkr": "CESTA" }, "part_4": { "naz": "Národní socialisté", "zkr": "NÁR.SOC." }, "part_5": { "naz": "Občanská demokratická strana", "zkr": "ODS" }, "part_6": { "naz": "ANO, vytrollíme europarlament", "zkr": "\"EU TROLL\"" }, "part_7": { "naz": "Česká str.sociálně demokrat.", "zkr": "ČSSD" }, "part_8": { "naz": "Romská demokratická strana", "zkr": "RDS" }, "part_9": { "naz": "Komunistická str.Čech a Moravy", "zkr": "KSČM" }, "part_10": { "naz": "Koalice DSSS a NF", "zkr": "DSSS+NF" }, "part_11": { "naz": "SPR-Republ.str.Čsl. M.Sládka", "zkr": "SPRRSČ M.Sládka" }, "part_12": { "naz": "Koalice Rozumní, ND", "zkr": "Rozumní+ND" }, "part_13": { "naz": "Volte Pr.Blok www.cibulka.net", "zkr": "PB" }, "part_14": { "naz": "NE-VOLIM.CZ", "zkr": "NE-VOLIM.CZ" }, "part_15": { "naz": "Pro Česko", "zkr": "PROČ" }, "part_16": { "naz": "Vědci pro Českou republiku", "zkr": "Vědci" }, "part_17": { "naz": "Koalice ČSNS, Patrioti ČR", "zkr": "ČSNS+PatriotiČR" }, "part_18": { "naz": "JSI PRO?Jist.Solid.In.pro bud.", "zkr": "JSI PRO?" }, "part_19": { "naz": "PRO Zdraví a Sport", "zkr": "PRO Zdraví" }, "part_21": { "naz": "Moravské zemské hnutí", "zkr": "MZH" }, "part_22": { "naz": "Česká Suverenita", "zkr": "ČS" }, "part_23": { "naz": "TVŮJ KANDIDÁT", "zkr": "TUJKA" }, "part_24": { "naz": "HLAS", "zkr": "Hlas" }, "part_25": { "naz": "Koalice Svobodní, RČ", "zkr": "Svobodní+RČ" }, "part_26": { "naz": "Koalice STAN, TOP 09", "zkr": "STAN+TOP" }, "part_27": { "naz": "Česká pirátská strana", "zkr": "Piráti" }, "part_28": { "naz": "Svob.a př.dem.-T.Okamura (SPD)", "zkr": "SPD" }, "part_29": { "naz": "ALIANCE NÁRODNÍCH SIL", "zkr": "ANS" }, "part_30": { "naz": "ANO 2011", "zkr": "ANO" }, "part_31": { "naz": "Agrární demokratická strana", "zkr": "ADS" }, "part_32": { "naz": "Moravané", "zkr": "Moravané" }, "part_33": { "naz": "PRVNÍ REPUBLIKA", "zkr": "NÁRODOVCI" }, "part_34": { "naz": "Demokratická strana zelených", "zkr": "DSZ-ZA PR.ZVÍŘ." }, "part_35": { "naz": "BEZPEČNOST,ODPOVĚDNOST,SOLID.", "zkr": "BOS" }, "part_36": { "naz": "Koalice Soukromníci, NEZ", "zkr": "Soukromníci+NEZ" }, "part_37": { "naz": "Evropa společně", "zkr": "ESO" }, "part_38": { "naz": "KONZERVATIVNÍ ALTERNATIVA", "zkr": "KOAL" }, "part_39": { "naz": "Křesť.demokr.unie-Čs.str.lid.", "zkr": "KDU-ČSL" }, "part_40": { "naz": "Alternativa pro Česk. rep.2017", "zkr": "APAČI 2017" } }

function getPartyShortName(partyId) {
    return parties[partyId].zkr;
}

function getPartyLongName(partyId) {
    if (partyId == 'ucast') {
        return "Účast";
    }
    return parties[partyId].naz;
}

export { parties, getPartyShortName, getPartyLongName };