function defineDiceSupport(context)
{
	// Takes (e.g. 3d4+3) and returns the results as an object
	// with fields: howMany, bonus, diceSize, and str.
	// Dice can be "normal" represented by 'd', "action" dice
	// from Crafty system represented by 'a', "hero" dice
	// ala HERO games for normal damage and "killing" dice
	// represented by 'k'.
	context.parseRollSpec = function (diceString)
	{
		var rc = {};

		var pd = diceString.indexOf('d');
		var many = 1;
		if (pd >= 1) {
		  many = parseInt( diceString.substring(0, pd), 10 );
		}

		rc.howMany = many;

		var pp = diceString.indexOf('+');
		pp = Math.max(pp, diceString.indexOf('-'));
		rc.bonus = 0;
		if (pp >=0) {
		  // There's a + or a -
		  rc.bonus = parseInt( diceString.substring(pp), 10 );
		}
		else {
		  pp = diceString.length;
		}

		rc.diceSize = parseInt( diceString.substring(pd+1, pp), 10 );

		// After converting all these to integers, do the math.
		rc.diceString = diceString;

		return rc;
	};

	context.d20 = function (bonus)
	{
	  return Math.floor(genrand_int32() % 20) + bonus + 1;
	};

	context.diceTotal = function (howMany, whatType, bonus)
	{
	  var total = 0, i = 0;
	  
	  for (i = 0; i < howMany; i += 1) {
		 total = Math.floor(genrand_int32() % whatType) + 1;
	  }
	  return total + bonus;
	};
	
	// Takes (e.g. 3d4+3) and returns the total
	context.rollDice = function (diceString)
	{
		var diceInfo = context.parseRollSpec(diceString);
		var bonus = diceInfo.bonus || 0;
		var diceSize = diceInfo.diceSize;
		var howMany = diceInfo.howMany;
		var total = 0;
		var eachRollStr = '';
		var eachRoll = [];
		var i;
		
		for (i = 0; i < howMany; i += 1) {
		  var roll = context.diceTotal(1, diceSize, 0);
		  total += roll;
		  eachRoll.push(roll);
		  eachRollStr = eachRollStr + roll;
		  if (bonus > 0 || i < (howMany-1)) {
			 eachRollStr = eachRollStr + ' + ';
		  }
		}

		if (!(bonus === 0)) {
		  total += bonus;
		  eachRollStr = eachRollStr + bonus;
		}
		diceInfo.eachRollStr = eachRollStr;
		diceInfo.eachRoll = eachRoll;
		diceInfo.total = total;

		return diceInfo;
	};

	context.stringizeRoll = function ( what, diceStrs, clickEvt ) {
	  var diceStr;
	  var htmlStr = what;
	  var roll;
	  var i;

	  if (diceStrs.constructor !== Array) {
		 diceStr = diceStrs;
		 diceStrs = [];
		 diceStrs.push(diceStr);
	  }

	  for (i = 0; i < diceStrs.length; ++i)
	  {
		  diceStr = diceStrs[i];
		  roll = context.rollDice(diceStr);

		  htmlStr = htmlStr + '<br>' + roll.diceString + 
			 ' = ' +  roll.eachRollStr + ' = ' + roll.total;
	  }

	  return htmlStr;
	};

	context.rollActionDie = function (type, splode, bonus) {
	  var adm = 'Action Die (d' + type + context.formatBonusBlank(bonus) + ')<br>';
	  if (!splode) {
		 splode = type;
	  }

	  var total = 0;
	  var roll;
	  
	  do {
		 roll = context.rollDice('d' + type);
		 total = total + roll.total;
		 if (roll.eachRoll[0] >= splode) {
			adm = adm + '<span style="color:red;">' + roll.eachRoll[0] + '</span> + ';
		 }
	  } while (roll.eachRoll[0] >= splode);

		adm = adm + roll.eachRoll[0];
		
		if (bonus) {
			roll.bonus = bonus;
			total = total + bonus;
			adm = adm + ' + ' + bonus;
		}

		adm = adm + ' = ';
		
		adm = adm + '<b>' + total + '</b>';
		roll.rollStr = adm;

		return roll;
	};
}