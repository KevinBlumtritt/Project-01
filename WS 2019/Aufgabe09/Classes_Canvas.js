"use strict";
var L09_Classes;
(function (L09_Classes) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let goldencut = 0.38;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * goldencut;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 400, y: 125 }, { x: 250, y: 75 });
        drawCloud({ x: 750, y: 110 }, { x: 200, y: 85 });
        drawCloud({ x: 1000, y: 140 }, { x: 220, y: 55 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawSnowman({ x: 400, y: 600 });
        drawTree({ x: 600, y: 500 }, { x: 1.8, y: 1.8 });
        drawTree({ x: 100, y: 550 }, { x: 2.4, y: 2.4 });
        drawTree({ x: 1060, y: 370 }, { x: 1.2, y: 1.2 });
        drawTree({ x: 260, y: 280 }, { x: 0.3, y: 0.3 });
        drawTree({ x: 340, y: 310 }, { x: 0.35, y: 0.35 });
        drawTree({ x: 760, y: 300 }, { x: 0.5, y: 0.5 });
        drawTree({ x: 960, y: 270 }, { x: 0.3, y: 0.3 });
        drawBirdhouse({ x: 900, y: 400 });
        drawFlyingBird({ x: 300, y: 100 });
        drawFlyingBird({ x: 800, y: 140 });
        drawStandingBird({ x: 965, y: 305 });
        //drawSnowflake();
        drawFlyingBirdies({ x: 20, y: 20 }, { x: canvas.width - 90, y: canvas.height - 480 });
        crc2.save();
        L09_Classes.image = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "skyblue");
        gradient.addColorStop(goldencut, "white");
        gradient.addColorStop(1, "#EBEBEB");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 75%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Clouds", _position, _size);
        let nParticles = 25;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawSnowman(_position) {
        console.log("Snowman", _position);
        //snowballs
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 0, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, -60, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, -120, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //hat
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.stroke();
        crc2.fillStyle = "black";
        crc2.fillRect(-25, -195, 50, 46);
        crc2.restore();
        crc2.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.stroke();
        crc2.fillStyle = "black";
        crc2.fillRect(-40, -145, 80, 15);
        crc2.restore();
        crc2.closePath();
        //carrot nose
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-5, -120);
        crc2.lineTo(-45, -112);
        crc2.lineTo(-5, -110);
        crc2.fillStyle = "orange";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
    }
    function drawTree(_position, _scale) {
        //tree trunk
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.scale(_scale.x, _scale.y);
        crc2.stroke();
        crc2.fillStyle = "saddlebrown";
        crc2.fillRect(0, 0, 20, 50);
        crc2.restore();
        crc2.closePath();
        //tree needles
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.scale(_scale.x, _scale.y);
        crc2.moveTo(-60, 0);
        crc2.lineTo(10, -70);
        crc2.lineTo(80, 0);
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.scale(_scale.x, _scale.y);
        crc2.moveTo(-50, -30);
        crc2.lineTo(10, -90);
        crc2.lineTo(70, -30);
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.scale(_scale.x, _scale.y);
        crc2.moveTo(-40, -55);
        crc2.lineTo(10, -110);
        crc2.lineTo(60, -55);
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
    }
    function drawBirdhouse(_position) {
        //house
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.stroke();
        crc2.fillStyle = "sienna";
        crc2.fillRect(0, 0, 70, 50);
        crc2.restore();
        crc2.closePath();
        //roof
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-10, 0);
        crc2.lineTo(35, -35);
        crc2.lineTo(80, 0);
        crc2.fillStyle = "sienna";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //stand
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.stroke();
        crc2.fillStyle = "sienna";
        crc2.fillRect(30, 0, 10, 220);
        crc2.restore();
        crc2.closePath();
        //hole
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(35, 20, 18, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
    }
    function drawFlyingBirdies(_start, _border) {
        for (let i = 0; i < 20; i++) {
            let x = _start.x + Math.random() * _border.x;
            let y = _start.y + Math.random() * _border.y;
            drawFlyingBird({ x, y });
        }
    }
    function drawFlyingBird(_position) {
        //body
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.ellipse(31, 1, 25, 15, Math.PI / 1, 0, 2 * Math.PI);
        crc2.fillStyle = getRandomColor();
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //head
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 0, 11, 0, 2 * Math.PI);
        crc2.fillStyle = getRandomColor();
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //eye
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(-4, -2, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //beak
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-11, -2);
        crc2.lineTo(-26, 4);
        crc2.lineTo(-9, 6);
        crc2.fillStyle = "gold";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //wings
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(13, -4);
        crc2.lineTo(30, -35);
        crc2.lineTo(47, -4);
        crc2.fillStyle = getRandomColor();
        crc2.fill();
        crc2.restore();
        crc2.closePath();
    }
    function drawStandingBird(_position) {
        //body
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.ellipse(0, 35, 18, 30, Math.PI / 1, 0, 2 * Math.PI);
        crc2.fillStyle = getRandomColor();
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //head
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 0, 15, 0, 2 * Math.PI);
        crc2.fillStyle = getRandomColor();
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //beak
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-6, 0);
        crc2.lineTo(0, 10);
        crc2.lineTo(6, 0);
        crc2.fillStyle = "gold";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //eyes
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(-4, -5, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(4, -5, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //wings
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-14, 20);
        crc2.lineTo(-65, 30);
        crc2.lineTo(-14, 48);
        crc2.fillStyle = "sienna";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(16, 20);
        crc2.lineTo(67, 30);
        crc2.lineTo(16, 48);
        crc2.fillStyle = "sienna";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //legs
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-5, 63);
        crc2.lineTo(-5, 86);
        crc2.lineWidth = 3;
        crc2.strokeStyle = "gold";
        crc2.stroke();
        crc2.restore();
        crc2.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(5, 63);
        crc2.lineTo(5, 86);
        crc2.lineWidth = 3;
        crc2.strokeStyle = "gold";
        crc2.stroke();
        crc2.restore();
        crc2.closePath();
    }
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }
})(L09_Classes || (L09_Classes = {}));
//# sourceMappingURL=Classes_Canvas.js.map