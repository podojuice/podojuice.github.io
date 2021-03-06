const championList = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'AurelionSol', 'Azir', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', 'Chogath', 'Corki', 'Darius', 'Diana', 'DrMundo', 'Draven', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'JarvanIV', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'Kaisa', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', 'Khazix', 'Kindred', 'Kled', 'Kogmaw', 'Leblanc', 'LeeSin', 'Leona', 'Lillia', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'MasterYi', 'MissFortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nocturne', 'Nunu', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan', 'Rammus', 'Reksai', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze','Samira', 'Sejuani', 'Senna', 'Sett', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'TahmKench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'TwistedFate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Velkoz', 'Vi', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xayah', 'Xerath', 'XinZhao', 'Yasuo', 'Yone', 'Yorick', 'Yuumi', 'Zac', 'Zed', 'Ziggs', 'Zilean', 'Zoe', 'Zyra']

const positionList = ['top', 'jg', 'mid', 'bot', 'sp', 'top1', 'jg1', 'mid1', 'bot1', 'sp1']

for (var a = 0; a < positionList.length; a++) {
    for(var count = 0; count < championList.length; count++){                
        var option = $("<option value=\""+championList[count]+"\">" + championList[count] +  "</option>");
        $('#'+positionList[a]+'Select').append(option);
    }
}

$("#topSelect").change(function() {
    $("#topSelect option:selected").each(function() {
        console.log($("#topSelect").val())
        $("#topChampImg").attr("src", "http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/"+$("#topSelect").val()+".png");
    });
});

$("#top1Select").change(function() {
    $("#top1Select option:selected").each(function() {
        console.log($("#top1Select").val())
        $("#top1ChampImg").attr("src", "http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/"+$("#top1Select").val()+".png");
    });
});

$("#jgSelect").change(function() {
    $("#jgSelect option:selected").each(function() {
        console.log($("#jgSelect").val())
        $("#jgChampImg").attr("src", "http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/"+$("#jgSelect").val()+".png");
    });
});

$("#midSelect").change(function() {
    $("#midSelect option:selected").each(function() {
        console.log($("#midSelect").val())
        $("#midChampImg").attr("src", "http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/"+$("#midSelect").val()+".png");
    });
});

$("#botSelect").change(function() {
    $("#botSelect option:selected").each(function() {
        console.log($("#botSelect").val())
        $("#botChampImg").attr("src", "http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/"+$("#botSelect").val()+".png");
    });
});

$("#spSelect").change(function() {
    $("#spSelect option:selected").each(function() {
        console.log($("#spSelect").val())
        $("#spChampImg").attr("src", "http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/"+$("#spSelect").val()+".png");
    });
});

$("#jg1Select").change(function() {
    $("#jg1Select option:selected").each(function() {
        console.log($("#jg1Select").val())
        $("#jg1ChampImg").attr("src", "http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/"+$("#jg1Select").val()+".png");
    });
});

$("#mid1Select").change(function() {
    $("#mid1Select option:selected").each(function() {
        console.log($("#mid1Select").val())
        $("#mid1ChampImg").attr("src", "http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/"+$("#mid1Select").val()+".png");
    });
});

$("#bot1Select").change(function() {
    $("#bot1Select option:selected").each(function() {
        console.log($("#bot1Select").val())
        $("#bot1ChampImg").attr("src", "http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/"+$("#bot1Select").val()+".png");
    });
});

$("#sp1Select").change(function() {
    $("#sp1Select option:selected").each(function() {
        console.log($("#sp1Select").val())
        $("#sp1ChampImg").attr("src", "http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/"+$("#sp1Select").val()+".png");
    });
});




const empties = document.querySelectorAll('.score');

for (const empty of empties) {
    empty.addEventListener('click', Click);
}

function Click(e) {
    if (this.className == 'score') {
        this.className = 'score1'
    } else if (this.className == 'score1') {
        this.className = 'score2'
    } else if (this.className == 'score2') {
        this.className = 'score3'
    } else {
        this.className = 'score'
    }
}
