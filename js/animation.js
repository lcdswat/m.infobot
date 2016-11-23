 $(document).ready(function(){
    var animData = {
        container: document.getElementById('comp-image-sell'),
        renderer: 'svg',
        loop: false,
        name: 'sell',
        autoplay: false,
        path: '/images/animation/sell.json'
    };
    
    var playTrigger = false;
    
    var anim = bodymovin.loadAnimation(animData);
    anim.addEventListener('complete', function(){
        anim.stop();
        
        if(playTrigger){
            anim.play();
        }
    });
    
    $('#comp-image-sell').mouseover(function(){
        playTrigger = true;
        anim.play();
    });
    
    $('#comp-image-sell').mouseout(function(){
        playTrigger = false;
    });
    
// Шива
(function(){
    var animData = {
        container: document.getElementById('shiva'),
        renderer: 'svg',
        loop: true,
        name: 'shiva',
        autoplay: true,
        path: '/images/animation/shiva.json'
    };
        
    var anim = bodymovin.loadAnimation(animData);       
}());

// Опрос
(function(){
    var animData = {
        container: document.getElementById('comp-image-ask'),
        renderer: 'svg',
        loop: false,
        name: 'ask',
        autoplay: false,
        path: '/images/animation/ask.json'
    };
    
    var playTrigger = false;
    
    var anim = bodymovin.loadAnimation(animData);
    anim.addEventListener('complete', function(){
        anim.stop();
        
        if(playTrigger){
            anim.play();
        }
    });
    
    $('#comp-image-ask').mouseover(function(){
        playTrigger = true;
        anim.play();
    });
    
    $('#comp-image-ask').mouseout(function(){
        playTrigger = false;
    });        
}());

// Информирование
(function(){
    var animData = {
        container: document.getElementById('comp-image-inform'),
        renderer: 'svg',
        loop: false,
        name: 'inform',
        autoplay: false,
        path: '/images/animation/inform.json'
    };
    
    var playTrigger = false;
    
    var anim = bodymovin.loadAnimation(animData);
    anim.addEventListener('complete', function(){
        anim.stop();
        
        if(playTrigger){
            anim.play();
        }
    });
    
    $('#comp-image-inform').mouseover(function(){
        playTrigger = true;
        anim.play();
    });
    
    $('#comp-image-inform').mouseout(function(){
        playTrigger = false;
    });        
}());

// Напоминание
(function(){
    var animData = {
        container: document.getElementById('comp-image-notif'),
        renderer: 'svg',
        loop: false,
        name: 'notif',
        autoplay: false,
        path: '/images/animation/notif.json'
    };
    
    var playTrigger = false;
    
    var anim = bodymovin.loadAnimation(animData);
    anim.addEventListener('complete', function(){
        anim.stop();
        
        if(playTrigger){
            anim.play();
        }
    });
    
    $('#comp-image-notif').mouseover(function(){
        playTrigger = true;
        anim.play();
    });
    
    $('#comp-image-notif').mouseout(function(){
        playTrigger = false;
    });        
}());

// Приглашение
(function(){
    var animData = {
        container: document.getElementById('comp-image-invite'),
        renderer: 'svg',
        loop: false,
        name: 'invite',
        autoplay: false,
        path: '/images/animation/invite.json'
    };
    
    var playTrigger = false;
    
    var anim = bodymovin.loadAnimation(animData);
    anim.addEventListener('complete', function(){
        anim.stop();
        
        if(playTrigger){
            anim.play();
        }
    });
    
    $('#comp-image-invite').mouseover(function(){
        playTrigger = true;
        anim.play();
    });
    
    $('#comp-image-invite').mouseout(function(){
        playTrigger = false;
    });        
}());

// Верификация
(function(){
    var animData = {
        container: document.getElementById('comp-image-verification'),
        renderer: 'svg',
        loop: false,
        name: 'verification',
        autoplay: false,
        path: '/images/animation/verification.json'
    };
    
    var playTrigger = false;
    
    var anim = bodymovin.loadAnimation(animData);
    anim.addEventListener('complete', function(){
        anim.stop();
        
        if(playTrigger){
            anim.play();
        }
    });
    
    $('#comp-image-verification').mouseover(function(){
        playTrigger = true;
        anim.play();
    });
    
    $('#comp-image-verification').mouseout(function(){
        playTrigger = false;
    });        
}());

});
