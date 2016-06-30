/*global console */
/*global showPopup, roman, titleCase */

function defineConditionFunctionality(context) {
	var c; // Used to hold a condition for manipulation
	
	context.roman = function (n) {
		var r = '';
		
		if (n < 0 || n > 10) {
			// Not supported
			r = String(n);
		}
		else {
			r = [ '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X' ][n];
		}
		
		return r;
	};

	context.Effect = function(name, doit, undoit) {
		this.name = name;
		this.doit = doit;
		this.undoit = undoit;
		this.applied = false;
		this.grade = 0;
	};
	
	context.Effect.prototype.doit = {};
	context.Effect.prototype.undoit = {};
	context.Effect.prototype.applied = false;

	context.Effect.prototype.apply = function(grade) {
		if (!this.applied) {
			this.doit(grade);
			this.applied = true;
			context.safeApply();
		}				
	};

	context.Effect.prototype.unapply = function(grade) {
		if (this.applied) {
			this.undoit(grade);
			this.applied = false;
			context.safeApply();
		}
	};

	context.GenericModifierEffect = function(attrName, amount) {
		var tempDo = function(grade) {
			context.data[attrName.toLowerCase()] += amount * grade;
		};
		
		var tempUndo = function(grade) {
			context.data[attrName.toLowerCase()] -= amount * grade;
		};
		
		context.Effect.call(this, String(amount) + ' ' + titleCase(attrName), tempDo, tempUndo);		
	};
	
	context.GenericModifierEffect.prototype = Object.create(context.Effect.prototype);
	
	context.AttributeModifierEffect = function(attrName, amount) {
		var tempDo = function(grade) {
			context.data[attrName.toLowerCase()] += amount * grade;
		};
		
		var tempUndo = function(grade) {
			context.data[attrName.toLowerCase()] -= amount * grade;
		};
		
		context.Effect.call(this, String(amount) + ' ' + titleCase(attrName), tempDo, tempUndo);		
	};
	
	context.AttributeModifierEffect.prototype = Object.create(context.Effect.prototype);
	
	context.SkillModifierEffect = function(skillName, amount) {
		var tempDo = function(grade) {
			context.data.skills[skillName.toLowerCase()].misc += amount * grade;
		};
		
		var tempUndo = function(grade) {
			context.data.skills[skillName.toLowerCase()].misc -= amount * grade;
		};
		
		context.Effect.call(this, (amount > 0 ? '+' : '') + String(amount) + ' ' + 
				titleCase(skillName) + ' skill.', tempDo, tempUndo);		
	};
	
	context.SkillModifierEffect.prototype = Object.create(context.Effect.prototype);
	
	context.AllSkillsModifierEffect = function(amount) {
		var tempDo = function(grade) {
			var s;
			for (s in context.data.skills) {
				if (context.data.skills.hasOwnProperty(s)) {
					context.data.skills[s].misc += amount * grade;
				}
			}
		};
		
		var tempUndo = function(grade) {
			var s;
			for (s in context.data.skills) {
				if (context.data.skills.hasOwnProperty(s)) {
					context.data.skills[s].misc -= amount * grade;
				}
			}
		};
		
		context.Effect.call(this, (amount > 0 ? '+' : '') + String(amount) + 
				' All skills', tempDo, tempUndo);		
	};
	
	context.AllSkillsModifierEffect.prototype = Object.create(context.Effect.prototype);
	
	context.AttrSkillsModifierEffect = function(attrName, amount) {
		var tempDo = function(grade) {
			var s;
			for (s in context.data.skills) {
				if (context.data.skills.hasOwnProperty(s)) {
					if (context.data.skills[s].attr_name === attrName) {
						context.data.skills[s].misc += amount * grade;
					}
				}
			}
		};
		
		var tempUndo = function(grade) {
			var s;
			for (s in context.data.skills) {
				if (context.data.skills.hasOwnProperty(s)) {
					if (context.data.skills[s].attr_name === attrName) {
						context.data.skills[s].misc -= amount * grade;
					}
				}
			}
		};
		
		context.Effect.call(this, (amount > 0 ? '+' : '') + String(amount) + ' to ' +
				titleCase(attrName) + '-based skills', tempDo, tempUndo);		
	};
	
	context.AttrSkillsModifierEffect.prototype = Object.create(context.Effect.prototype);
	
	context.AddConditionEffect = function(conditionName) {
		var tempDo = function(grade) {
			context.data.conditions[conditionName.toLowerCase()].addGrade(null);
		};
		
		var tempUndo = function(grade) {
			context.data.conditions[conditionName.toLowerCase()].removeGrade(null);
		};
		
		context.Effect.call(this, 'Apply ' + titleCase(conditionName) + ' condition.',
				tempDo, tempUndo);		
	};
	
	context.AddConditionEffect.prototype = Object.create(context.Effect.prototype);
	
	context.NoDexDefenseEffect = function() {
		var tempDo = function(grade) {
			this.storeDodge = context.data['defense_dodge_mod'];
			this.storeDex = context.data['defense_dex_mod'];
			context.data['defense_dodge_mod'] = 0;
			context.data['defense_dex_mod'] = function() { return 0; };
		};
		
		var tempUndo = function(grade) {
			context.data['defense_dodge_mod'] = this.storeDodge;
			context.data['defense_dex_mod'] = this.storeDex;
		};
		
		context.Effect.call(this, 'No DEX bonus nor Dodge bonus to Defense.',
				tempDo, tempUndo);		
	};
	
	context.NoDexDefenseEffect.prototype = Object.create(context.Effect.prototype);
	
	context.Condition = function(name, description, effects)
	{
		this.baseName = name;
		this.description = description;
		this.effects = effects;
		this.grade = 0;
		this.maxGrade = 1;		
		
		return this;
	};

	context.Condition.prototype.removeAll = function(event) {
		if (this.grade > 0) {
			this.unapply();
			this.grade = 0;
		}
	};
		
	context.Condition.prototype.removeGrade = function(event, amount) {
		amount = amount  || 1;
		
		if ((this.grade - amount) >= 0) {
			this.unapply();
			this.grade = this.grade - amount;
			this.apply();
		}
	};
		
	context.Condition.prototype.addGrade = function(event, amount) {
		amount = amount || 1;
		
		if ((this.grade + amount) <= this.maxGrade) {
			this.unapply();
			this.grade = this.grade + amount;
			this.apply();
		}
	};

	context.Condition.prototype.getGrade = function() {
		return this.grade;
	};
	
	context.Condition.prototype.apply = function() {
		var e;

		if (this.grade > 0)
		{
			for (e = 0; e < this.effects.length; ++e) {
				this.effects[e].apply(this.grade);
			}
		}
	};
		
	context.Condition.prototype.unapply = function() {
		var e;

		if (this.grade > 0)
		{
			for (e = 0; e < this.effects.length; ++e) {
				this.effects[e].unapply(this.grade);
			}
		}
	};
		
	context.Condition.prototype.getName = function() {
		var n = this.baseName;
		if (this.maxGrade > 1 && this.grade > 0) {
			n = n + ' ' + context.roman(this.grade);
		}
		
		return n;
	};

	context.Condition.prototype.showDescription = function(event) {
		var html = '<b>' + this.getName() + '</b><br/>' + this.description;
		context.popup.show(html, event);
	};
		
	
	context.data.conditions = {};

	context.data.conditions['baffled'] = new context.Condition( 'Baffled', 'The character suffers a -2 penalty with ' +
	   'all skill checks per grade he suffers. A character loses 1 baffled grade (I-V)at the end of each scene.', 
		[ new context.AllSkillsModifierEffect(-2) ] );
	
	context.data.conditions['bleeding'] = new context.Condition( 'Bleeding', 'The character suffers 1 point of subdual '+
	   'damage at the end of each round. If he takes 1 or more actions during the round, he suffers 1d4 lethal damage ' +
		'instead. This condition heals at the end of the current scene, but may be eliminated earlier with a successful ' +
		'full-round Medicine check (DC 20).', [] );
																					
	context.data.conditions['blinded'] = new context.Condition( 'Blinded', 'The character is flat-footed and cannot see ' +
	   'anything. He cannot make skill checks that require sight and suffers a -8 penalty with attack checks. Meanwhile, ' +
		'his opponents gain a +2 bonus when attacking him.', 
		[ new context.AddConditionEffect('flat-footed'), 
		  new context.GenericModifierEffect('base_attack', -8) ] );
																				  
	context.data.conditions['deafened'] = new context.Condition( 'Deafened', 'The character cannot hear anything and cannot ' +
	   'make skill checks that require hearing.', [] );
																					
	context.data.conditions['enraged'] = new context.Condition( 'Enraged', 'The character may not make skill checks and ' +
	   'automatically attacks the nearest conscious opponent with hismost damaging attack. If no opponent is close enough ' +
		'to attackduring the current round, the character turns on the nearesttarget, even if it\'s a friend. Once per round, '+
		'the character may make a Resolve check (DC 20) to calm himself and lose this condition; otherwise it fades at the ' +
		'end of the current scene. In either case, the character falls unconscious immediately after.', [] );
																				  
	context.data.conditions['entangled'] = new context.Condition( 'Entangled', 'The character suffers a -2 penalty with attack ' +
	   'checks and a -4 penalty with Dexterity-based skill checks. He may not Refresh or Run, and his Speed drops to ' +
		'1/2 standard (rounded down).', 
		[ new context.GenericModifierEffect('base_attack', -2),
		  new context.AttrSkillsModifierEffect('dex', -4) ] );
																					
	context.data.conditions['fatigued'] = new context.Condition( 'Fatigued', 'The character may not Run. Further, his Speed ' +
	   'drops by 5 ft., his Strength score drops by 2, and his Dexterity score drops by 2 per grade he suffers (e.g. at ' +
		'fatigued II, a character\'s Speed drops by 10 ft. and his Strength and Dexterity scores drop by 4 each). If a ' +
		'character with fatigued IV is fatigued again, he instead falls unconscious. A character loses 1 fatigued grade ' +
		'at the end of each scene and for each full hour of sleep.', 
		[ new context.GenericModifierEffect('walk_speed', -5),
		  new context.AttributeModifierEffect('dex', -2),
		  new context.AttributeModifierEffect('str', -2) ] );
																				  
	
	context.data.conditions['fixated'] = new context.Condition( 'Fixated', 
	   'The character may not attack or make skill checks and must take at least 1 Standard Move action ' +
		'per round toward the source of his fixation. Once per round, the character may make a ' +
		'<span class="link" onClick="showNamedSkill.bind(context, \'resolve\',event,20);">Resolve check (DC 20)</span> ' +
		'to regain composure and lose this condition; otherwise it fades at the end of the ' +
		'current scene. This condition is also lost if the character is attacked by an adversary.', [] );
		
	context.data.conditions['flanked'] = new context.Condition( 'Flanked', 'A character is flanked when 2 opponents ' +
		'stand on directly opposite and adjacent sides of him. While flanking a character, an opponent gains a +2 bonus ' +
		'with attack checks against him.', [] );
		
	context.data.conditions['flat-footed'] = new context.Condition( 'Flat-Footed', 'The character loses his Dexterity ' +
		'bonus to Defense (if positive), as well as all dodge bonuses to Defense. He may also be targeted with a variety ' +
		'of special effects, such as sneak attack damage. The flat-footed condition is lost when the character takes a half ' +
		'or full action, or is successfully attacked.', [ new context.NoDexDefenseEffect() ] );
		
	context.data.conditions['frightened'] = new context.Condition( 'Frightened', 'The character may not attack or make skill ' +
		'checks and must take at least 1 Standard Move action per round away from the source of his fear. Once per round, ' +
		'the character may make a ' +
		'<span class="link" onClick="showNamedSkill(\'resolve\',event,20);">Resolve check (DC 20)</span> ' +
		'to regain composure and lose this condition; otherwise it fades at ' +
		'the end of the current scene.', [] );
		
	context.data.conditions['held'] = new context.Condition( 'Held', 'The character is flat-footed and may take no non-free ' +
		'actions except an opposed Athletics check to escape the hold. A character who becomes held a second time loses this ' +
		'condition and becomes pinned.', 
		[ new context.AddConditionEffect('flat-footed'), 
		  new context.AddConditionEffect('pinned')] );
		
	context.data.conditions['helpless'] = new context.Condition( 'Helpless', 'A character is helpless when he is unable to ' +
		'defend himself in any way. Attacks against a helpless character gain a +4 bonus. Also, the character may be targeted ' +
		'with a Coup de Grace action (see page 219).', [] );
		
	context.data.conditions['hidden'] = new context.Condition( 'Hidden', 'A character is hidden from those who don\'t know his ' +
		'location. They may not attack him, nor may they target him with skill checks that require line of sight. When a ' +
		'hidden character attacks an oblivious target within Close Quarters, the target is considered flat-footed (even if ' +
		'he isn\'t otherwise). Any character aware of a hidden character\'s presence may make an opposed full-round Search ' +
		'check vs. the hidden character\'s Blend or Sneak (GM\'s choice) and with success the target character loses the ' +
		'hidden condition. A character also loses this condition whenever he casts a spell, makes an attack, or takes any ' +
		'obvious action.', [] );
		
	context.data.conditions['incorporeal'] = new context.Condition( 'Incorporeal', 'The character cannot be harmed with ' +
		'physical attacks but is affected by force damage and other non-physical attacks as normal. He may pass through ' +
		'solid objects at will, though force fields and other effects block his movement. This condition doesn\'t convey ' +
		'any special ability to float or fly, and an incorporeal character must hold his breath when his mouth and nose are ' +
		'blocked. Should a character lose this condition while occupying the same space as another character or object, ' +
		'they merge and all characters in the merged mass are immediately killed.', [] );
		
	context.data.conditions['invisible'] = new context.Condition( 'Invisible', 'When the character moves at least 10 ft. ' +
		'from his starting position as his last action during a round, he becomes hidden.', 
		[ new context.AddConditionEffect('hidden')] );
		
	context.data.conditions['paralyzed'] = new context.Condition( 'Paralyzed', 'The character is flat-footed and may only ' +
		'take actions that are purely mental.', [ new context.AddConditionEffect('flat-footed') ] );
		
	context.data.conditions['pinned'] = new context.Condition( 'Pinned', 'The character is flat-footed and may take no ' +
		'actions except an opposed Athletics check to escape the pin (in which case the character becomes held instead). ' +
		'He may be bound with 1 free action and may only speak as the pinning character allows. The pinning character may ' +
		'use him as a human shield, gaining 1/2 personal cover. Finally, each adjacent opponent gains a +4 bonus with attacks ' +
		'targeting the character.', [ new context.AddConditionEffect('flat-footed') ] );
		
	context.data.conditions['prone'] = new context.Condition( 'Prone', 'A character is prone when he\'s intentionally lying ' +
		'on the ground. He may not take Movement actions other than Handle Item and Reposition, though he still gains his ' +
		'Bonus 5-ft. Step if he doesn\'t take a Movement action. The character gains a +2 bonus to Defense against ranged ' +
		'attacks, but also suffers a -2 penalty with melee attacks.', 
		[ new context.GenericModifierEffect('base_attack', -2), 
		  new context.GenericModifierEffect('defense_misc_mod', +2),] );
		
	context.data.conditions['shaken'] = new context.Condition( 'Shaken', 'The character may not take 10 or 20. Further, he ' +
		'suffers a -2 penalty with all attack checks, as well as Charisma- and Wisdom-based skill checks, per grade suffered. ' +
		'If a character with shaken IV is shaken again, he instead falls unconscious. A character loses 1 shaken grade at the ' +
		'end of each scene.', 
		[ new context.GenericModifierEffect('base_attack', -2),
		  new context.AttrSkillsModifierEffect('cha', -2),
		  new context.AttrSkillsModifierEffect('wis', -2) ] );
		
	context.data.conditions['sickened'] = new context.Condition( 'Sickened', 'The character suffers a -2 penalty with all ' +
		'attacks and skill checks, as well as all damage rolls and saves.', 
		[ new context.GenericModifierEffect('base_attack', -2),
		  new context.AllSkillsModifierEffect(-2),
		  new context.GenericModifierEffect('fortitude_misc_mod', -2),
		  new context.GenericModifierEffect('will_misc_mod', -2),
		  new context.GenericModifierEffect('reflex_misc_mod', -2),
		  ] );
		
	context.data.conditions['slowed'] = new context.Condition( 'Slowed', 'The character may take only 1 half action during ' +
		'each round. Further, he suffers a -1 penalty with attack checks and Reflex saves, his Defense decreases by 1, and ' +
		'his Speed drops to 1/2 standard (rounded down).', 
		[ new context.GenericModifierEffect('reflex_misc_mod', -1),
		  new context.GenericModifierEffect('base_attack', -1),
		] );
		
	context.data.conditions['sprawled'] = new context.Condition( 'Sprawled', 'A character is sprawled when he\'s knocked off ' +
		'his feet. He is flat-footed and suffers a -2 penalty with all attack checks. This condition is lost when the ' +
		'character Repositions (see page 220).', 
		[ new context.AddConditionEffect('flat-footed'),
		  new context.GenericModifierEffect('base_attack', -2),
		] );
		
	context.data.conditions['stunned'] = new context.Condition( 'Stunned', 'The character is flat-footed and may take no ' +
		'actions.', [ new context.AddConditionEffect('flat-footed') ] );
		
	context.data.conditions['unconscious'] = new context.Condition( 'Unconscious', 'The character will wake in 2d4 hours, ' +
		'or on a successful DC 10 Medicine check.', [] );

	context.data.conditions['baffled'].maxGrade = 4;
	context.data.conditions['shaken'].maxGrade = 4;
	context.data.conditions['fatigued'].maxGrade = 4;

	context.data.conditions['buff'] = new context.Condition('Buff', 
			'Miscellaneous STR bonus', [ new context.AttributeModifierEffect('str', +1) ]);
	context.data.conditions['buff'].maxGrade = 10;
	
	context.data.conditions['quick'] = new context.Condition('Quick', 
			'Miscellaneous DEX bonus', [ new context.AttributeModifierEffect('dex', +1) ]);
	context.data.conditions['quick'].maxGrade = 10;
	
	context.data.conditions['tough'] = new context.Condition('Tough', 
			'Miscellaneous CON bonus', [ new context.AttributeModifierEffect('con', +1) ]);
	context.data.conditions['tough'].maxGrade = 10;
	
	context.data.conditions['smart'] = new context.Condition('Smart', 
			'Miscellaneous INT bonus', [ new context.AttributeModifierEffect('int', +1) ]);
	context.data.conditions['smart'].maxGrade = 10;
	
	context.data.conditions['wise'] = new context.Condition('Wise', 
			'Miscellaneous WIS bonus', [ new context.AttributeModifierEffect('wis', +1) ]);
	context.data.conditions['wise'].maxGrade = 10;
	
	context.data.conditions['cute'] = new context.Condition('Cute', 
			'Miscellaneous CHA bonus', [ new context.AttributeModifierEffect('cha', +1) ]);
	context.data.conditions['cute'].maxGrade = 10;
	
}
