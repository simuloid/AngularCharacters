function definePopupFunctionality(context)
{
	context.Popup = function(divID) {
		this.divID = divID;
		this.lastX = 0;
		this.lastY = 0;
		this.moved = false;
		this.mouseDownInPopup = false;
		this.ele = document.getElementById(this.divID);
		this.content = document.getElementById('popup_content');

		var fn = function(event) { return this.handleMouseDown(event); }
		this.ele.onmousedown = fn.bind(this);
		fn = function(event) { return this.moveOrDrag(event); }
		this.ele.onmouseup = fn.bind(this);
		fn = function(event) { return this.drag(event); }
		this.ele.onmousemove = fn.bind(this);
		fn = function(event) {  if (event.keyCode == 27 || true) this.hide(); }
		this.ele.onkeydown = fn.bind(this);
		
		return this;
	}

	context.Popup.prototype.moveOrDrag = function (evt) {
		if (this.handleMouseUp(evt)) {
			this.hide();
		}
	};
	
	context.Popup.prototype.handleMouseDown = function (evt) {
		if (true || evt.target === this.content ||
			 evt.target === this.ele) {
			this.lastX = evt.pageX;
			this.lastY = evt.pageY;
			this.moved = false;
			this.mouseDownInPopup = true;
			evt.preventDefault();
		
			return true;
		}
		
		return false;
	};

	context.Popup.prototype.handleMouseUp = function (evt) {
		this.mouseDownInPopup = false;
		if (!this.moved) {
			this.hide();
		}
		return !this.moved;
	};

	context.Popup.prototype.drag = function (evt) {
		if (this.mouseDownInPopup) {
			var dx = evt.pageX - this.lastX;
			var dy = evt.pageY - this.lastY;
			if (dx != 0 || dy != 0) {
				this.moved = true;
				this.lastX = evt.pageX;
				this.lastY = evt.pageY;

				var pu = evt.target; //document.getElementById("popup");

				while (pu && pu.tagName !== 'DIV') {
					pu = pu.parentNode;
				}
				
				var top = pu.offsetTop + dy;
				var left = pu.offsetLeft + dx;
				pu.style.top = top + 'px';
				pu.style.left = left + 'px';
			}
			evt.preventDefault();
		}

		return false;
	};

	context.Popup.prototype.hide =function ()
	{
		var pu = this.ele; // document.getElementById(this.divID);
		pu.style.visibility = "hidden";
	};

	context.Popup.prototype.centerOnMouse = function(evt, maxLineLength)
	{
		var pu = this.ele; // document.getElementById(this.divID);
		var puw = pu.offsetWidth;
		var puh = pu.offsetHeight;
		
		// By default, the popop is centered over the last mouse event.
		var top = (evt.pageY || window.lastMouseY) - puh/2;
		var left = (evt.pageX || window.lastMouseX) - puw/2;

		// But if the popup is hanging off the right side of the window, then we will
		// scoot it back to the left.
		var right = left + puw;
		var maxWithMargin = Math.floor(0.9 * maxLineLength);

		if (right > (window.innerWidth - maxWithMargin)) {
			left = window.innerWidth - puw - maxWithMargin;
			pu.style.left = left + "px";
		}

		if (top < window.pageYOffset) { top = window.pageYOffset; }
		if (left < window.pageXOffset) { left = pageXOffset; }
		pu.style.top = top + "px";
		pu.style.left = left + "px";

		var bottom = top + puh - window.pageYOffset;
		if (bottom > window.innerHeight - 36) {
			// alert('puh: ' + puh + '  bottom: ' + bottom + '  wind: ' + window.innerHeight);
			top = window.innerHeight - 36 - puh + window.pageYOffset;
			pu.style.top = top + "px";
		}

	};
	
	context.Popup.prototype.centerInWindow = function()
	{
		var pu = this.ele; // document.getElementById(this.divID);
		var puw = pu.offsetWidth;
		var puh = pu.offsetHeight;
		
		var top = window.innerHeight/2 - puh/2 + window.pageYOffset;
		var left = window.innerWidth/2 - puw/2 + window.pageXOffset;
		
		pu.style.top = top + "px";
		pu.style.left = left + "px";
	};
	
	context.Popup.prototype.show = function (htmlStr, evt)
	{
		this.hide();
		var i;
		var pu = this.ele; // document.getElementById(this.divID);
		var put = document.getElementById("popup_content");

		var text = unescape(htmlStr);
		put.innerHTML = text;
		var puw = pu.offsetWidth;
		var puh = pu.offsetHeight;
		// var top = evt.pageY - puh/2;
		// var left = evt.pageX - puw/2;
		// Replace <br>, <hN>, <p>, and <li> tags with newlines.
		text = text.replace(/<br\/?>/igm,'\n');
		text = text.replace(/<\/?p>/igm,'\n');
		text = text.replace(/<\/?h.>/igm,'\n');
		text = text.replace(/<li>/igm,'\n');
		// Now replace all tags with nothing, because they
		// don't take up any actual space.
		text = text.replace(/<[^<]+>/gm, '');
		// Replace CR/LF and LF/CR combinations with newlines.
		text = text.replace(/(\r\n)|(\n\r)/gm, '\n');
		
		var lines = text.split('\n');
		var nlines = lines.length;
		var longest = 0;
		var maxLineLength = 60;

		for (i=0; i < lines.length; i += 1) {
			if (lines[i].length > longest) {
				longest = lines[i].length;
				if (longest > maxLineLength) {
					nlines = nlines + Math.ceil(longest / maxLineLength);
					longest = maxLineLength;
				}
			}
		}

		nlines = Math.max(nlines, 1);
		//  top=Math.round(window.innerHeight/2 - puh/2) + window.pageYOffset + "px";
		//  left=Math.round(window.innerWidth/2 - puw/2) + window.pageXOffset + "px";
		pu.style.height = String(nlines + 2) + 'em';
		pu.style.width = String(longest / 2) + 'em';

		// Now that the inner HTML of the popup has been set and styled, we can get
		// its width.
		puw = pu.offsetWidth;
		puh = pu.offsetHeight;
		
		// this.centerOnMouse(evt, maxLineLength);
		this.centerInWindow();

		pu.style.visibility = "visible";
		//pu.focus(); // On platforms with keyboards, hitting escape could clear the window.
	};		
}