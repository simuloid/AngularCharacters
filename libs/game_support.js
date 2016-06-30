/**
	File <b>game_support.js</b> contains the AngularJS controller for the Fantasy Craft
	interactive character sheet web app.  It defines the following <ul>filters:
		<li>checkmark - Displays a boolean as a unicode checkmark if true, and a non-breaking space if false.</li>
		<li>bonus - Prepends a '+' explicitly to non-negative numbers.</li>
		<li>titleCase - Displays a string with initial caps, with special treatment of upper-casing Roman numbers.</li>
	</ul>
*/
// Seed the random number generator with milliseconds
init_genrand(new Date().getTime());
/*
function properties(obj) {
  var rc = '',
		i;
  
  for (i in obj) {
	 if (obj.hasOwnProperty(i)) {
		rc = rc + i + ': ' + obj[i] + '\n';
	 }
  }

  return rc;
}

function setCookie(c_name,value,expire_in_days)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + expire_in_days);
	var c_value=escape(value) + ((expire_in_days === null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}
 
function getCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i += 1)
	{
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x === c_name)
		{
			return unescape(y);
		}
	}
}

function resetDamage(row) {
  var cols = row.getElementsByTagName('TD');
  var label = cols[0].id;
  label = label.substring(label.indexOf('_')+1);
  var max = cols[0].innerHTML;
  cols[4].innerHTML = max;
  cols[2].innerHTML = '0';
}

function addValue(what, howMuch) {
  if (!howMuch)
  {
    howMuch = 1;
  }

  data[what] = data[what] + howMuch;
}

function toggleTableBlock(row) {
//  alert('Display style of row is ' + row.style.display);
  var tbl = row.parentNode;
  var rows = tbl.getElementsByTagName('TR');
  var r;
  
  for (r = 0; r < rows.length; ++r) {
    if (rows[r] !== row && rows[r].style !== null) {
      rows[r].style.display = (rows[r].style.display !== 'none' ? 'none' : 'table-row');
    }
  }
}

function collapseTable(row) {
  var tbl = row.parentNode;
  var rows = tbl.getElementsByTagName('TR');
  var r;

  for (r = 0; r < rows.length; ++r) {
    if (rows[r] !== row) {
      if (rows[r].style !== null) {
         rows[r].style.display = 'none';
      }
    }
  }
}

function collapseAll() {
  var t, row;
  var tbls = document.getElementsByClassName('collapsible');
  for (t = 0; t < tbls.length; ++t) {
    if (tbls[t].getElementsByTagName !== null) {
       row = tbls[t].getElementsByTagName('TR')[0];
       collapseTable(row);
    }
  }
}

function showDiceBag(evt) {
  var db = document.getElementById('dicebag');
  db.style.top = evt.pageY + "px";
  db.style.left = evt.pageX + "px";
  db.style.visibility = 'visible';
}

  function rollMe(evt) {
    var dieStr = '';
    dieStr = document.getElementById('HowMany').value;
    dieStr = dieStr + 'd';
    dieStr = dieStr + document.getElementById('DieType').value;
    dieStr = dieStr + '+';
    dieStr = dieStr + document.getElementById('Bonus').value;
    var roll = rollDice(dieStr);
    var x = document.getElementById('dstr');
    x.value = roll.eachRollStr + ' = ' + roll.total;
  }

  function hideDiceBag() {
    var x = document.getElementById('dicebag');
    x.style.visibility = 'hidden';
  }

function getColumns(tblRow) {
	var i;
  var cols = tblRow.childNodes;
  var rc = [];
  for (i = 0; i < cols.length; ++i) {
    if (cols[i].tagName === 'TH' || cols[i].tagName === 'TD') {
      rc.push(cols[i].cloneNode(true));
    }
  }

  return rc;
}

function decorateTable(tbl, startRow) {
	var r, c, i;
	var cols;
	var cols2;
  var rows = tbl.getElementsByTagName('TR');

  for (r = startRow; r < rows.length; ++r) {
    cols = [];
    cols2 = (rows[r].getElementsByTagName('TD'));
    for (i = 0; i < cols2.length; ++i) {
      cols.push(cols2[i]);
    }

    cols2 = (rows[r].getElementsByTagName('TH'));
    for (i = 0; i < cols2.length; ++i) {
      cols.push(cols2[i]);
    }

    for (c = 0; c < cols.length; ++c) {
      if (cols[c].tagName === 'TD') {
        cols[c].style.background = (r % 2) ? 'white' : 'lightgoldenrodyellow'; // '#99ffcc';
      }
      else if (cols[c].tagName === 'TH') { 
        cols[c].style.background = (r % 2) ? 'white' : 'lightgoldenrodyellow'; // '#99ffcc';
        cols[c].style.color = 'black';
        cols[c].style.textdecoration = 'bold';
//        cols[c].style.background = (r % 2) ? 'gray' : 'black';
      }
    } 
  }
}

var sortAscending = [true, true, true, true, true, true, true, true, true, true, true, true];
var lastSortCol = -1;

function sortTableByColumn(tblcell, colnum, startRow) {
  var tbl = tblcell;
  var r, s, rows, cols;
  var smallestT, smallestI;
  var changed;
  
  if (!tblcell) {
    alert('tblcell is ' + tbl + '.  colnum is ' + colnum + ' startRow is ' + startRow);
    return;
  }

  while (tbl && (tbl.tagName !== 'TBODY' && tbl.tagName !== 'TABLE')) {
    tbl = tbl.parentNode;
  }

  if (!tbl) {
    alert('Tbl is null.  tblcell is ' + tblcell.parentNode);
  }

  if (lastSortCol !== colnum) {
    sortAscending[colnum] = true;
  }
  else {
    sortAscending[colnum] = !sortAscending[colnum];
  }

  lastSortCol = colnum;

  rows = tbl.getElementsByTagName('TR');
  for (r = startRow; r < rows.length-1; ++r) {
    cols = getColumns(rows[r]);
    smallestT = cols[colnum].innerHTML;
    smallestI = r;
    changed = false;
    for (s = r+1; s < rows.length; ++s) {
      var st = getColumns(rows[s])[colnum].innerHTML;
      if ((sortAscending[colnum] && st < smallestT) || (!sortAscending[colnum] && st > smallestT)) {
        smallestT = st;
        smallestI = s;
      }
    }
//    alert('smallestI: ' + smallestI + '  smallestT: ' + smallestT);
    if (r < smallestI) {
      tbl = rows[smallestI].parentNode;
      var x = rows[smallestI]; //.cloneNode(true);
      tbl.removeChild(rows[smallestI]);
      tbl = rows[r].parentNode;
      tbl.insertBefore(x, rows[r]);
      rows = tbl.getElementsByTagName('TR');
    }
  }

  decorateTable(tbl, startRow);
}
*/

function titleCase(s) {
  // Insert spaces where there is a change from lower to upper
  var i;
  var regex = /([a-z])([A-Z])/g;
  s = s.replace(regex, "$1 $2");

  // Split the string at spaces
  var t = s.toLowerCase();
  var ses = t.split(/\s+/);
  // Capitalize each string in the resulting list
  for (i = 0; i < ses.length; ++i) {
    if (ses[i].match(/^[ivxcd]+$/)) {
      ses[i] = ses[i].toUpperCase();
    }
	 else {
		ses[i] = ses[i].charAt(0).toUpperCase() + ses[i].substring(1);
	}
  }
  // Rejoin the list separated by spaces.
  t = ses.join(' ');
  return t;
}

String.prototype.titleCase = function() {
	return titleCase(this);
};

function checkForRoll(evt) {
  var inp = document.getElementById('diceInput');
  var ds = inp.value;
  if (ds.indexOf('roll') > 0) {
    rollInputDice(evt);
  }
  else if (ds.indexOf('clear') > 0) {
    inp.blur();
    inp.focus();
  }
}

function showRollGlobal(text,diceStr,evt) {
	var  selector = angular.element(evt.target);
	var scope = selector.scope();
	scope.showRoll(text, diceStr, evt);
}

// Executes a string of Javascript code in the context of
// the AngularJS scope of the element associated with
// the target of the given event.  The codeStr may
// reference variables event and scope, knowing that
// event is the event that caused the call, and that scope
// is the AngularJS scope associated with that event.
function callAngular(event, codeStr) {
	var  selector = angular.element(event.target);
	var scope = selector.scope();
	var code = unescape(codeStr);
	eval(code);
}

// Returns the body of the given function as an escaped
// string with single quotes pre- and ap-pended.
function getBody(fn) {
	var s = fn.toString();
	var body = s.slice(s.indexOf('{')+1, s.lastIndexOf('}'));
	body = body.replace(/[\r\n]/g,'');
	body = body.replace(/^\s*/,'');
	body = body.replace(/\s*$/,'');
	body = escape(body);
	body = '\'{ ' + body + ' }\'';
	return body;
}

function makeLink(linkText, onClickFn) {
	var html = '<span class="link" onClick="callAngular(event, ' + 
		getBody(onClickFn) + ');">' + linkText + '</span>';
		
	return html;
}

function showSpellGlobal(spellname, evt) {
	var  selector = angular.element(evt.target);
	var scope = selector.scope();
   var spellText = scope.lookupSpell(spellname).toHTML();
  scope.popup.show(spellText, evt);
}

function addRowToTable(headerRowId, obj) {
  var header = document.getElementById(headerRowId);
  var tbl = header.parentNode;
  var row = document.createElement('TR');
  var i;
  
  for (i = 0; i < obj.length; ++i) {
    var cell = document.createElement('TD');
    cell.style.textAlign = 'left';
    cell.innerHTML = obj[i];
    row.appendChild(cell);
  }
  tbl.appendChild(row);
}

function updateValues() {
	var i, tc;
  for (i in data) {
	 if (data.hasOwnProperty(i)) {
		 tc = document.getElementById(i);
		 if (tc) {
			if (typeof(data[i]) === 'boolean') {
			  if (data[i]) {
				 tc.innerHTML = '&#x2713';
			  }
			  else {
				 tc.innerHTML = '&nbsp;';
			  }
			}
			else {
			  tc.innerHTML = data[i];
			}
		 }
	 }
  }
}

function populateSheet() {
  // updateValues();
  var i;
  for (i = 0; i < data.abilities.length; ++i) {
    addRowToTable('abilities_header_row', data.abilities[i]);
  }
  
  insertSpellRows(data.spells);
}

var mod = angular.module('GameSupportFilters', []);
mod.filter('checkmark', 
		function() {
			return function(input) {
				return input ? '\u2713' : ' ';
			};	
		}
	);

	mod.filter('bonus', 
		function() {
			return function(input) {
				var s = String(input);
				if (input >= 0) {
					s = '+' + s;
				}
				return titleCase(s);
			};
		}
	);

mod.filter('titleCase', 
		function() {
			return function(input) {
				return titleCase(input);
			};
		}
	);
	
angular.module('GameSupport', ['GameSupportFilters', 'ngSanitize'] ).controller('GameSupportCtrl', function ($scope)
{
	$scope.safeApply = function(fn) {
	  var phase = this.$root.$$phase;
	  if(phase == '$apply' || phase == '$digest') {
		if(fn && (typeof(fn) === 'function')) {
		  fn();
		}
	  } else {
		this.$apply(fn);
	  }
	};

	$scope.data = {};

	with ($scope) {
		data['str_mod'] = function () { return Math.floor(data['str'] / 2) - 5; };
		data['dex_mod'] = function () { return Math.floor(data['dex'] / 2) - 5; };
		data['con_mod'] = function () { return Math.floor(data['con'] / 2) - 5; };
		data['int_mod'] = function () { return Math.floor(data['int'] / 2) - 5; };
		data['wis_mod'] = function () { return Math.floor(data['wis'] / 2) - 5; };
		data['cha_mod'] = function () { return Math.floor(data['cha'] / 2) - 5; };
	};

	$scope.Weapon = function(bundle) {
		this.name = bundle.name;
		this.style = bundle.style || 'melee';
		this.damageType = bundle.damageType;
		this.damageBase = bundle.damageBase;
		this.damageMisc = bundle.damageMisc || 0;
		this.damageAttr = bundle.damageAttr || 'str';
		this.toHitAttr = bundle.toHitAttr || 'str';
		this.bonus = bundle.bonus;
		this.threat = bundle.threat || 20;
		this.size = bundle.size;
		this.weight = bundle.weight;
		this.range = bundle.range || 'N/A';
		this.shots = bundle.shots || 'N/A';
		this.props = bundle.props;
		this.damageBonus = function() { 
			return $scope.data[this.style+'_dmg_misc_mod'] + $scope.data[this.damageAttr + '_mod'](); 
		};
	};
	
	
	$scope.formatBonus = function(bonus) {
		var s = String(bonus);
		
		if (bonus >= 0) {
			s = '+' + s;
		}
		
		return s;
	};
	
	$scope.formatBonusBlank = function(bonus) {
		var s = '';
		if (bonus) {
			s = String(bonus);
			if (bonus >= 0) {
				s = '+' + s;
			}
		}
		
		return s;
	};
	
	$scope.makeLink = function (linkText, onClickFn) {
		var html = '<span class="link" onClick="callAngular(event, ' + 
			getBody(onClickFn) + ');">' + linkText + '</span>';
			
		return html;
	};

	$scope.makeSkillRollLink = function(skillName, dc) {
		var linkText = dc ? 'DC ' + dc + ' ' : '';
		linkText = linkText + titleCase(skillName) + ' Check';

		var body = 'scope.showNamedSkill(\'' + skillName.toLowerCase() + '\', event, ' + dc + ');';
		body = escape(body);
		body = '\'{' + body + '}\'';
		var html = '<span class="link" onClick="callAngular(event, ' + 
			body + ');">' + linkText + '</span>';
			
		return html;
	};

	/**
		Converts strings that describe a duration into 
		seconds.  The string must be of the form:
		<number> <units> where <number> is a number and
		<units> is the unit of time.
		For example, '1 half action', '1 round', '10 minutes'.
		This is based on the notion that a round is 6 seconds, as
		described in FC2P page 203.
		
			free action = 0 seconds
			half action = 3 seconds
			full action = 6 seconds
			minute = 60 seconds
			hour = 3600 seconds
			day = 86400 seconds.
	*/
	$scope.convertTimeStringToSeconds = function(ts) {
		var x = ts || '';
		x = x.toLowerCase();
		x = x.replace(/\s+/gm, ' ');
		x = x.replace(/^\s+/, '');
		x = x.replace(/\s+$/, '');
		var tokens = x.split(' ');
		var time = undefined;
		var mult = 1;
		var unit = undefined;
		var conversions = {	'free': 0, 'half': 3, 'full': 5, 'round': 6, 
									'second': 1, 'minute': 60, 'hour': 3600, 'day': 86400 };
		if (tokens.length >= 2) {
			mult = parseInt(tokens[0], 10) || 1;
			unit = tokens[1];
			// tokens[2] probably contains "action", which we can ignore.
			time = mult * conversions[unit];
		}
		
		return time;
	};

	definePopupFunctionality($scope);
	defineSkillFunctionality($scope);
	defineConditionFunctionality($scope);
	defineSpellFunctionality($scope);
	defineCharacterData($scope);
	postDefineCharacterData($scope);
	defineDiceSupport($scope);
	
	$scope.popup = new $scope.Popup('popup');
	
	with ($scope) {
		$scope.adjustDamage = function(what, howMuch) {
			$scope.data['cur_' + what] = $scope.data['cur_' + what] + howMuch;
			$scope.data['lost_' + what] = $scope.data['lost_' + what] - howMuch;
		};
	
	$scope.spellSortBy = 'name';
	$scope.lastSortBy = '';
	
	$scope.sortSpellsBy = function(colName) {
		if ($scope.spellSortBy === colName) {
			$scope.spellSortBy = '-' + colName;
		}
		else {
			$scope.spellSortBy = colName;
		}
		$scope.lastSortBy = $scope.spellSortBy;
	};
	
	$scope.resetDamage = function(what) {
		$scope.data['cur_' + what] = $scope.data['max_' + what];
		$scope.data['lost_' + what] = 0;
	};
	
	$scope.checkOrSpace = function(flag) {
		if (flag) {
			return '\u2713';
		}
		return '&nbsp;';
	};
	
	$scope.temp = [ 'below-normal', '', 'above-normal' ]; 
	
	$scope.sign = function (x) {
		return x ? x < 0 ? -1 : 1 : 0;
	};

	$scope.rollSkill = function (skill, evt, dc, adds) {
	  var isOrigin = skill.isOrigin;
	  var bonus = formatBonus(skill.curTotal());
	  var threat = skill.threat;
	  var roll;
	  
	  roll = rollDice('d20' + bonus);
	  
	  roll.error = false;
	  roll.threat = false;

	  if (roll.eachRoll[0] === 1) {
		 roll.error = true;
	  }
	  else if (roll.eachRoll[0] >= threat) {
		 roll.threat = true;
	  }

	  if (!isOrigin) {
		// non-Origin skills have a maximum roll of 15
		// and can never be critical.
		 roll.total = Math.min(roll.total, 15);
		 roll.threat = false;
	  }

	  var passed = '';
	  if (dc) {
		 if (roll.total >= dc) {
			passed = '<br>(made it by ' + (roll.total - dc) + ')';
			roll.passed = true;
			roll.error = false;
		 }
		 else {
			passed = '<br>(missed it by ' + (dc - roll.total) + ')';
			roll.passed = false;
			roll.threat = false;
		 }
	  }

	  threat = '';
	  
	  if (roll.error) {
		 threat = '<span style="color: red;">(error)</span>';
	  }
	  else if (roll.threat) {
		 threat = '<span style="color: red;">(threat)</span>';
	  }

	  var addMsg = '';
	  if (adds) {
		 var addRoll = rollDice(adds);
		 addMsg = '<br>' + addRoll.diceString + ' = ' + addRoll.eachRollStr + ' = ' + addRoll.total;
	  }

	  roll.html = skill.name.toUpperCase() + '<br>' + roll.diceString + ' = ' 
					 + roll.eachRollStr + ' = ' + roll.total + passed 
					 + threat + addMsg;

	  return roll;
	};

	$scope.showSkill = function (skillName, evt, dc, adds) {
	  var skill = data.skills[skillName];
	  var roll = rollSkill(skill, evt, dc, adds);
	  $scope.popup.show(roll.html, evt);
	  return roll;
	};

	$scope.showSpell = function (spellname, evt) {
	  var spellText = lookupSpell(spellname.toUpperCase()).toHTML();
	  // var ele = angular.element(spellText);
	  // ele.bind($scope);
	  // var x = angular.compile(ele);
	  $scope.popup.show(spellText, evt);
	};

	$scope.castSpell = function (spell, evt) {
		var spCost = parseInt(spell.level, 10);
		var castDC = spell.dc;
		var spellName = spell.name;
		var roll = '';

		// castDC of N/A implies a priest spell ability, which is an automatic success.
		if (isNaN(parseFloat(castDC)) && castDC === 'N/A') {
			roll = rollNamedSkill('spellcasting', evt, 0);
			roll.passed = true;
			roll.error = false;
			roll.threat = false;
			roll.total = 'enough';
			roll.html = '<br>Automatic success.<br>';
		}
		else {
			roll = rollNamedSkill('spellcasting', evt, parseInt(castDC, 10));
			if (!roll.threat) {
				// Deduct the spell points
				data['cur_spellpoints'] -= spCost;
			}
		}

		roll.html = 'Casting <b>' + spellName + '</b><br>' + roll.html;

		$scope.popup.show(roll.html, evt);
	};

	$scope.rollSave = function (saveName, evt) {
	  var bonus = data[saveName.toLowerCase() + '_total']();
	  showRoll(titleCase(saveName) + ' Save', '1d20' + formatBonus(bonus), evt);
	};

	$scope.rollNamedSkill = function (skillName, evt, dc, adds) {
	  return rollSkill($scope.data.skills[skillName], evt, dc, adds);
	};

	$scope.showNamedSkill = function (skillName, evt, dc, adds) {
	  var roll = rollNamedSkill(skillName, evt, dc, adds);
	  $scope.popup.show(roll.html, evt);
	  
	  return roll;
	};

	$scope.showRoll = function ( what, diceStrs, clickEvt ) {
	  var msg = stringizeRoll( what, diceStrs, clickEvt );
	  $scope.popup.show(msg, clickEvt);
	};
	
	$scope.discoverSkillNames = function(host) {
		var names = [];
		var key;
		
		// host had better be an object.
		for (key in host) {
			if (host.hasOwnProperty(key)) {
				if (null !== key.match('_ranks')) {
					names.push( key.replace('_ranks','') );
				}
			}
		}
	
		return names;
	};

	/**
		Compares the current value of a named datum to
		a baseline (original) value.  Returns a value
		as follows:
					   current < original     'below-normal'
					   current == original    ''
					   current > original     'above-normal'
	*/
	$scope.compareToOriginal = function(name, value) {
		var origName = 'orig_' + name;
		
		// If we didn't pass in a value, then assume that
		// the value is a named attribute of the data object.
		if (value === undefined) {
			value = data[name];
		}
		
		// If data['orig_'foo] didn't previously exist, initialize it
		// to the current value.
		if (data[origName] === undefined) {
			data[origName] = value;
		}
		
		return ['below-normal', '', 'above-normal'][1+sign(value - data[origName])];
	};

	$scope.addValue = function(what, howMuch) {
	  if (!howMuch)
	  {
		howMuch = 1;
	  }

	  $scope.data[what] = $scope.data[what] + howMuch;
	};
	
	$scope.rollInputDice = function (evt, ds) {
	  var re = new RegExp(' ','g');
	  ds = ds.replace(re, '');
	  ds = ds.replace('die', 'd');
	  ds = ds.replace('dice', 'd');
	//  alert('Value: ' + ds);
	  showRoll('Roll',ds, evt);
	};

	$scope.blocks = {};

	$scope.setBlockVisible = function(blockName) {
		blocks[blockName] = true;
	};
	
	$scope.setBlockHidden = function(blockName) {
		blocks[blockName] = false;
	};
	
	$scope.toggleBlockVisibility = function(blockName) {
		if (blocks[blockName] === undefined) {
			blocks[blockName] = false;
		}
		blocks[blockName] = !blocks[blockName];
	};
	
	$scope.blockIsVisible = function (blockName) {
		return blocks[blockName];
	};

	$scope.formatDamage = function(dmg) {
		return '<b>Dmg: </b>' + dmg.diceString + ' = ' + dmg.eachRollStr + ' = <b>' + dmg.total + '</b>';
	};
	
	$scope.formatTitle = function(title) {
		return '<b>' + titleCase(title) + '</b><br><br>';
	};
	
	$scope.rollDamage = function(weapon) {
		return rollDice(weapon.damageBase+formatBonus(weapon.damageBonus()));
	};
	
	$scope.showDamage = function(weapon, evt) {
		var dmg = rollDamage(weapon);
		$scope.popup.show( formatTitle(weapon.name + ' damage') +
				formatDamage(dmg), evt);
	};
	
	$scope.formatAttack = function(toHit) {
		return '<b>To Hit:</b> ' + toHit.diceString + ' = ' + toHit.eachRollStr + 
		  ' = <b>' + toHit.total + '</b>' + toHit.threatText + '<br>';
	};
	
	$scope.rollAttack = function(weapon) {
		var toHit = formatBonus(weapon.bonus());
		var threat = weapon.threat;
		toHit = rollDice('d20' + toHit);
		
		if (toHit.eachRoll[0] >= threat) {
		 toHit.threat = true;
		 toHit.eachRollStr  = '<span style="color: red;">' + toHit.eachRollStr + '</span>';
		 toHit.threatText = '<span style="color: red;"> (threat)</span>';
		}
		else {
			toHit.threat = false;
			toHit.threatText = '';
		}
		
		return toHit;
	};
	
	$scope.showAttack = function(weapon, evt) {
		var toHit = rollAttack(weapon);
		$scope.popup.show(formatTitle(weapon.name + ' attack') +
		  formatAttack(toHit), evt);
	};
	
	$scope.showAttackAndDamage = function (weapon, evt) {
		var weaponName = titleCase(weapon.name);
		var toHit = rollAttack(weapon);
		var dmg = rollDamage(weapon);
		
		$scope.popup.show(formatTitle( weaponName + ' attack')
		  + formatAttack(toHit)
		  + formatDamage(dmg), evt);
	};

	$scope.showActionDie = function(evt) {
		var type = $scope.data['action_die_type'];
		var splode = $scope.data['action_die_explode'];
		var bonus = $scope.data['action_die_bonus'];
		var adr = $scope.rollActionDie(type, splode, bonus);
		
		$scope.popup.show(adr.rollStr, evt);
		
		$scope.data['cur_action_dice'] -= 1;
	};
	
	}; // With
	
	// insertSpellRows($scope.data.spells);
	// collapseAll();
});

// GameSupportCtrl.$inject('$scope', '$compile');
