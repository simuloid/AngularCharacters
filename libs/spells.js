function defineSpellFunctionality(scope) {
	scope.Spell = function (bundle) {
		this.name = bundle.name;
		this.level = parseInt(bundle.level, 10);
		this.school = bundle.school;
		if (bundle.castingTime) {
			this.castingTime = bundle.castingTime.toString().toLowerCase();
		}
		else {
			this.castingTime = '1 half action';
		}
		this.cts = scope.convertTimeStringToSeconds(this.castingTime);
		this.distance = bundle.distance;
		this.area = bundle.area;
		this.duration = bundle.duration;
		this.savingThrow = bundle.savingThrow;
		this.prepCost = bundle.prepCost;
		this.effect = bundle.effect;
		this.dc = 13 + parseInt(this.level) * 3;
		this.aux = bundle.aux;

		this.setLevel = function(lvl) {
			this.level = lvl;
			this.dc = 13 + parseInt(this.level) * 3;
			
			return lvl;
		};

		this.setPathSpell = function() {
			this.dc = 'N/A';
		};
	  
		this.toHTML = function() {
			var rc = '<h4>' + escape(this.name) + '</h4>';
			var fields = [ 'level', 'school', 'castingTime', 'distance', 'area', 'duration',
				'savingThrow', 'prepCost', 'dc', 'effect' ];
			for (var i in fields) {
				var item = fields[i];
				var value = this[item];
				if (value != undefined) {
					rc = rc + '<b>' + escape(titleCase(item)) + ':</b> ' + value + '<br>';
				}
			}
			
			if (this.aux) {
				rc = rc + escape(this.aux);
			}
			
			return rc;
		};
	};

	scope.lookupSpell = function (spellname) {
		var sn = spellname.toUpperCase();
		var rc = scope.spellDescriptions[sn];
		if (rc == undefined) {
			sn = sn.replace(/\'/g,'’');
			sn = escape(sn);
			rc = scope.spellDescriptions[sn];
		}
		
		if (rc == undefined) {
			alert("Can't find spell called '" + spellname + "'.");
		}
		
		return rc;
	};

	scope.spellDescriptions = new Object();

	scope.AddToLibrary = function (spell)
	{
		var sname = spell.name;
		sname = sname.replace(/\'/g,'’');
		sname = escape(sname.toUpperCase());
		scope.spellDescriptions[sname] = spell;
	};

	var ks15 = scope.makeSkillRollLink('knowledge', 15);
	
	with (scope) {
	AddToLibrary( new Spell( { name : 'AIR WALK',
	 level : '4',
	 school : 'Compass (Air)',
	 castingTime : '1 half action',
	 distance : 'Personal or Touch',
	 duration : '10 minutes per Casting Level',
	 effect : 'One character can tread on air as if walking on solid ground. He can move upward or downward at a 45-degree angle, the former at 1/2 his Speed (rounded up).'
	} ));

	AddToLibrary( new Spell( { name : 'ALARM',
	 level : '1',
	 school : 'Seals',
	 castingTime : '1 half action',
	 distance : 'Close',
	 area : '20 ft. penetrating sphere',
	 duration : '2 hours per Casting Level (dismissible, enduring)',
	 effect : 'The Area is protected by either an audible or mental alarm (your choice) that is triggered whenever a corporeal character enters the Area without saying the pre-set password aloud. The audible alarm can be heard at up to 60 ft., while the mental alarm can only be heard by you (and only if you’re within 1 mile of the Area).'
	} ));

	AddToLibrary( new Spell( { name : 'ALIGN WEAPON',
	 level : '2',
	 school : 'Word (Aligned)',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : '1 minute per Casting Level',
	 effect : '1 melee weapon or 50 ammo gains your Alignment.'
	} ));

	AddToLibrary( new Spell( { name : 'ANIMATE DEAD I',
	 level : '1',
	 school : 'Necromancy',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'You animate the remains of 1 dead character as a standard NPC with a Threat Level equal to your Casting Level.'
	} ));

	AddToLibrary( new Spell( { name : 'ANIMATE DEAD II',
	 level : '3',
	 school : 'Necromancy',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'You animate the remains of 1 dead character as a skeleton or zombie (max. 60 XP) or 2 skeletons or zombies (max. 40 XP each).'
	} ));

	AddToLibrary( new Spell( { name : 'ANIMATE DEAD III',
	 level : '5',
	 school : 'Necromancy',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'You animate the remains of 1 dead character as a skeleton or zombie (max. 80 XP) or 2 skeletons or zombies (max. 60 XP each) or 4 skeletons or zombies (max. 40 XP each).'
	} ));

	AddToLibrary( new Spell( { name : 'ANIMATE DEAD IV',
	 level : '7',
	 school : 'Necromancy',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'You animate the remains of 1 dead character as a skeleton or zombie (max. 100 XP) or 2 skeletons or zombies (max. 80 XP each) or 4 skeletons or zombies (max. 60 XP each) or 8 skeletons or zombies (max. 40 XP each).'
	} ));

	AddToLibrary( new Spell( { name : 'ANIMATE DEAD V',
	 level : '9',
	 school : 'Necromancy',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'As Animate Dead I, except that you gain 1 skeleton or zombie (max. 120 XP), 2 skeletons or zombies (max. 100 XP each), 4 skeletons or zombies (max. 80 XP each), 8 skeletons or zombies (max. 60 XP each), or 16 skeletons or zombies (max. 40 XP each).'
	} ));

	AddToLibrary( new Spell( { name : 'ANTI-MAGIC FIELD I',
	 level : '6',
	 school : 'Artifice',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 area : '10 ft. penetrating sphere',
	 duration : '10 minutes per Casting Level (dismissible)',
	 effect : 'An invisible field surrounds you, suppressing all spells and magic items within — including yours. This spell may not be countered.'
	} ));

	AddToLibrary( new Spell( { name : 'ANTI-MAGIC FIELD II',
	 level : '9',
	 school : 'Artifice',
	 castingTime : '1 minute',
	 distance : 'Personal',
	 area : '1,000 ft. penetrating sphere',
	 duration : '1 day (dismissible, enduring)',
	 prepCost : '4',
	 effect : 'As Anti-Magic Field I, except as noted.'
	} ));

	AddToLibrary( new Spell( { name : 'ARCANE LOCK',
	 level : '2',
	 school : 'Seals',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : 'Permanent',
	 effect : 'One portal or object is magically locked, the Prestidigitation DC required to open it increasing by 10. You may open the portal or object normally.'
	} ));

	AddToLibrary( new Spell( { name : 'BESTOW CURSE',
	 level : '3',
	 school : 'Affliction (Curse)',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : '1 day per Casting Level (dismissible, enduring)',
	 savingThrow : 'Will negates',
	 effect : 'You curse the target, inflicting one of the following effects:<br>• 4 temporary impairment with 1 attribute (minimum 1)<br>• –2 penalty with attack checks, skill checks, and saves • 25% chance at the start of each Initiative Count that the character loses 1 half action Alternately, you may invent a curse of your own, though it requires GM approval and shouldn’t be any more powerful than these options.'
	} ));

	AddToLibrary( new Spell( { name : 'BLESS',
	 level : '1',
	 school : 'Blessing',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : '1 minute per Casting Level',
	 effect : 'You and each ally within 50 ft. when the spell is cast gain a +1 morale bonus with attack checks and Will saves.'
	} ));

	AddToLibrary( new Spell( { name : 'BLINDNESS/DEAFNESS',
	 level : '2',
	 school : 'Affliction (Curse)',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : '1 round per Casting Level (dismissible, enduring)',
	 savingThrow : 'Fortitude negates (terminal)',
	 effect : 'The target is <em> blinded </em>or <em> deafened, </em>as you choose.'
	} ));

	AddToLibrary( new Spell( { name : 'BLINDNESS/DEAFNESS, MASS',
	 level : '6',
	 school : 'Affliction (Curse)',
	 distance : 'Personal',
	 area : '30 ft. penetrating cone',
	 effect : 'As Blindness/Deafness I, except affecting a number of characters in the Area up to your Casting Level.'
	} ));

	AddToLibrary( new Spell( { name : 'BLUR',
	 level : '2',
	 school : 'Illusion',
	 castingTime : '1 half action',
	 distance : 'Personal or Touch',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'One character’s outline appears blurred, shifting and wavering. Attacks directed at him suffer a –4 penalty.'
	} ));

	AddToLibrary( new Spell( { name : 'BRAWN I',
	 level : '2',
	 school : 'Blessing',
	 castingTime : '1 full action',
	 distance : 'Personal or Touch',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'The character gains a +3 magic bonus to your choice of Strength, Dexterity, or Constitution.'
	} ));

	AddToLibrary( new Spell( { name : 'BRAWN II',
	 level : '4',
	 school : 'Blessing',
	 castingTime : '1 full action',
	 distance : 'Personal or Touch',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'As Brawn I, except the magic bonus increases to +5.'
	} ));

	AddToLibrary( new Spell( { name : 'BRAWN III',
	 level : '6',
	 school : 'Blessing',
	 castingTime : '1 full action',
	 distance : 'Personal or Touch',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'As Brawn I, except the magic bonus increases to +7.'
	} ));

	AddToLibrary( new Spell( { name : 'BRAWN IV',
	 level : '8',
	 school : 'Blessing',
	 castingTime : '1 full action',
	 distance : 'Personal or Touch',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'As Brawn I, except the magic bonus increases to +9.'
	} ));

	AddToLibrary( new Spell( { name : 'BRAWN I, MASS',
	 level : '5',
	 school : 'Blessing',
	 area : '50 ft. sphere',
	 castingTime : '1 full action',
	 distance : 'Personal or Touch',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'As Brawn I, except that it affects a number of characters in the Area up to your Casting Level.'
	} ));

	AddToLibrary( new Spell( { name : 'CALL FROM BEYOND I',
	 level : '1',
	 school : 'Calling',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'You summon 1 of the following outsiders as a standard NPC with a Threat Level equal to your Casting Level. With GM approval, you may modify your choice, choose an outsider from the Bestiary<em>(see page 253)</em>, or build a new NPC, so long as it has the Outsider Type, a maximum XP value of 40, and matches your Alignment (if any).'
	} ));

	AddToLibrary( new Spell( { name : 'CALL FROM BEYOND II',
	 level : '3',
	 school : 'Calling',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'As Call from Beyond I, except that you gain 1 outsider (max. 60 XP) or 2 outsiders (max. 40 XP each).'
	} ));

	AddToLibrary( new Spell( { name : 'CALL FROM BEYOND III',
	 level : '5',
	 school : 'Calling',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'As Call from Beyond I, except that you gain 1 outsider (max. 80 XP), 2 outsiders (max. 60 XP each), or 4 outsiders (max. 40 XP each).'
	} ));

	AddToLibrary( new Spell( { name : 'CALL FROM BEYOND IV',
	 level : '7',
	 school : 'Calling',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'As Call from Beyond I, except that you gain 1 outsider (max. 100 XP), 2 outsiders (max. 80 XP each), 4 outsiders (max. 60 XP each), or 8 outsiders (max. 40 XP each).'
	} ));

	AddToLibrary( new Spell( { name : 'CALL FROM BEYOND V',
	 level : '9',
	 school : 'Calling',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'As Call from Beyond I, except that you gain 1 outsider (max. 120 XP), 2 outsiders (max. 100 XP each), 4 outsiders (max. 80 XP each), 8 outsiders (max. 60 XP each), or 16 outsiders (max. 40 XP each).'
	} ));

	AddToLibrary( new Spell( { name : 'CALL LIGHTNING I',
	 level : '3',
	 school : 'Weather (Lightning)',
	 castingTime : '1 full action',
	 distance : 'Local',
	 area : '60 ft. sphere',
	 duration : '1 minute per Casting Level',
	 effect : 'Once per round, you may spend 1 half action to call a local lightning strike in the Area<em>(see page 369)</em>. You may call 1 strike per 2 Casting Levels (maximum 8).'
	} ));

	AddToLibrary( new Spell( { name : 'CALL LIGHTNING II',
	 level : '5',
	 school : 'Weather (Lightning)',
	 castingTime : '1 full action',
	 distance : 'Remote',
	 area : '60 ft. sphere',
	 duration : '1 minute per Casting Level',
	 effect : 'As Call Lightning I, except you may call 1 local or near strike per Casting Level (maximum 12). You may also call one or more direct strikes, though each reduces the number of local or near strikes by 4.'
	} ));

	AddToLibrary( new Spell( { name : 'CAUSE WOUNDS IV',
	 level : '4',
	 school : 'Shadow (Darkness)',
	 effect : 'As Cause Wounds I, except your target suffers 40 lethal damage.'
	} ));

	AddToLibrary( new Spell( { name : 'CAUSE WOUNDS I, MASS',
	 level : '5',
	 school : 'Shadow (Darkness)',
	 distance : 'Close',
	 effect : 'As Cause Wounds I, except it affects a number of characters up to your Casting Level.'
	} ));

	AddToLibrary( new Spell( { name : 'CAUSE WOUNDS II, MASS',
	 level : '6',
	 school : 'Shadow (Darkness)',
	 distance : 'Close',
	 effect : 'As Cause Wounds II, except it affects a number of characters up to your Casting Level.'
	} ));

	AddToLibrary( new Spell( { name : 'CAUSE WOUNDS III, MASS',
	 level : '7',
	 school : 'Shadow (Darkness)',
	 distance : 'Close',
	 effect : 'As Cause Wounds III, except it affects a number of characters up to your Casting Level.'
	} ));

	AddToLibrary( new Spell( { name : 'CAUSE WOUNDS IV, MASS',
	 level : '8',
	 school : 'Shadow (Darkness)',
	 distance : 'Close',
	 effect : 'As Cause Wounds IV, except it affects a number of characters up to your Casting Level.'
	} ));

	AddToLibrary( new Spell( { name : 'CHARM PERSON I',
	 level : '1',
	 school : 'Charm',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : '1 hour per Casting Level',
	 savingThrow : 'Will negates (terminal)',
	 effect : 'The Disposition of 1 character who shares a Type with you increases by 5. A character is only swayed by the largest single Disposition modifier from a spell at any time. This spell ends when the affected character is attacked or otherwise accosted.'
	} ));

	AddToLibrary( new Spell( { name : 'CHARM PERSON II',
	 level : '3',
	 school : 'Charm',
	 effect : 'As Charm Person I, except the target’s Disposition increases by 10.'
	} ));

	AddToLibrary( new Spell( { name : 'CHARM PERSON III',
	 level : '5',
	 school : 'Charm',
	 effect : 'As Charm Person I, except the target’s Disposition increases by 15.'
	} ));

	AddToLibrary( new Spell( { name : 'CALM EMOTIONS',
	 level : '2',
	 school : 'Charm',
	 castingTime : '1 half action',
	 distance : 'Local',
	 area : '20 ft. penetrating sphere',
	 duration : 'Concentration, up to 1 round per Casting Level (dismissible)',
	 savingThrow : 'Will negates (terminal)',
	 effect : 'Characters in the Area are pacified, losing all morale bonuses and penalties, as well as the <em> enraged </em>condition (if any of them have it). They also lose the will to fight, becoming unable to make attacks or indulge in other aggressive behavior. This spell ends when any affected character is attacked or otherwise accosted.'
	} ));

	AddToLibrary( new Spell( { name : 'CASTIGATE I',
	 level : '4',
	 school : 'Word (Aligned, Sonic)',
	 castingTime : '1 full action',
	 distance : 'Close',
	 area : '20 ft. penetrating sphere',
	 duration : 'Instant',
	 savingThrow : 'Will half',
	 effect : 'Your faith shakes those with an opposing Alignment to the core, inflicting 1d6 divine damage per 2 Casting Levels (maximum 10d6).'
	} ));

	AddToLibrary( new Spell( { name : 'CASTIGATE II',
	 level : '8',
	 school : 'Word (Aligned, Sonic)',
	 area : '60 ft. penetrating sphere',
	 savingThrow : 'Will half (damage)',
	 effect : 'As Castigate I, except targets also become<em> sprawled</em>.'
	} ));

	AddToLibrary( new Spell( { name : 'CAUSE WOUNDS I',
	 level : '1',
	 school : 'Shadow (Darkness)',
	 castingTime : '1 full action',
	 distance : 'Touch',
	 duration : 'Instant',
	 savingThrow : 'Will half',
	 effect : 'Your target suffers 10 lethal damage.'
	} ));

	AddToLibrary( new Spell( { name : 'CAUSE WOUNDS II',
	 level : '2',
	 school : 'Shadow (Darkness)',
	 effect : 'As Cause Wounds I, except your target suffers 20 lethal damage.'
	} ));

	AddToLibrary( new Spell( { name : 'CAUSE WOUNDS III',
	 level : '3',
	 school : 'Shadow (Darkness)',
	 effect : 'As Cause Wounds I, except your target suffers 30 lethal damage.'
	} ));

	AddToLibrary( new Spell( { name : 'COLOR SPRAY',
	 level : '1',
	 school : 'Illusion',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 area : '15 ft. cone',
	 duration : 'Instant',
	 savingThrow : 'Will negates (disbelief)',
	 effect : 'A vivid cone of clashing colors springs forth from your hand. Anyone in the Area is <em> blinded </em>for 1d4 rounds and <em> stunned </em>for 1 round. <em> Blinded </em>and sightless creatures are unaffected by <em> color spray.</em>'
	} ));

	AddToLibrary( new Spell( { name : 'COMMAND I',
	 level : '1',
	 school : 'Word',
	 castingTime : '1 free action',
	 distance : 'Close',
	 duration : '1 round',
	 savingThrow : 'Will negates scene',
	 effect : 'One character immediately performs 1 Movement Action of your choice to the best of his ability.'
	} ));

	AddToLibrary( new Spell( { name : 'CHARM PERSON IV',
	 level : '7',
	 school : 'Charm',
	 effect : 'As Charm Person I, except the target’s Disposition increases by 20.'
	} ));

	AddToLibrary( new Spell( { name : 'CHARM PERSON V',
	 level : '9',
	 school : 'Charm',
	 effect : 'As Charm Person I, except the target’s Disposition increases by 25.'
	} ));

	AddToLibrary( new Spell( { name : 'CHILL STORM I',
	 level : '2',
	 school : 'Weather (Ice)',
	 castingTime : '1 full action',
	 distance : 'Remote',
	 area : '200 ft. per Casting Level sphere',
	 duration : '1 round per 2 Casting Levels (enduring)',
	 effect : 'Light snow blankets the Area, increasing Defense by 2, decreasing visual range increments by 20 ft., and inflicting 1d4 cold damage per round.'
	} ));

	AddToLibrary( new Spell( { name : 'CHILL STORM II',
	 level : '4',
	 school : 'Weather (Ice)',
	 effect : 'As Chill Storm I, except boosting Defense by 3 and decreasing visual range increments by 30 ft. As a half action, you may end this spell early to rain hail down on the Area, inflicting 3d6 lethal damage.'
	} ));

	AddToLibrary( new Spell( { name : 'CLOUDKILL',
	 level : '5',
	 school : 'Creation (Air)',
	 castingTime : '1 half action',
	 distance : 'Local',
	 area : '20 ft. penetrating sphere',
	 duration : '1 minute per Casting Level (dismissible)',
	 savingThrow : 'Fortitude negates (death), Fortitude half (Con impairment)',
	 effect : 'The Area floods with poisonous fog. Each standard character must make a Fortitude save or die when entering and at the start of each round they remain, while each special character suffers 1d4 temporary Constitution impairment when entering and at the start of each round they remain (Fort save for 1/2, rounded down). The cloud harms on contact, so holding one’s breath doesn’t help, but characters immune to poison are unaffected.  The cloud may be stationary or move 10 ft. away from you each round (choose when the spell is cast). Its vapors are heavier than air and sink, even pouring down through openings. The cloud can’t penetrate liquids. Wind disperses it in 4 rounds and a tornado disperses it immediately. The cloud burns away in 2 rounds when exposed to 20+ fire damage.'
	} ));

	AddToLibrary( new Spell( { name : 'COMMAND II',
	 level : '5',
	 school : 'Word',
	 duration : '1 round per Casting Level',
	 effect : 'As Command I, except that up to 1 character per Casting Level perform 1 action each.'
	} ));

	AddToLibrary( new Spell( { name : 'CONCEALING COUNTRYSIDE I',
	 level : '1',
	 school : 'Nature',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : '1 hour per Casting Level (dismissible)',
	 effect : 'Your surroundings bend and weave, conspiring to mask your presence from others and granting you a +4 magic bonus with Blend and Sneak checks. This spell may only be cast in areas with significant plant life.'
	} ));

	AddToLibrary( new Spell( { name : 'CONCEALING COUNTRYSIDE II',
	 level : '4',
	 school : 'Nature',
	 distance : 'Personal or Touch',
	 area : '15 ft. penetrating sphere',
	 effect : 'As Concealing Countryside I, except a number of characters up to 1/2 your Casting Level gain the bonus, which increases to +10. The spell ends if any of these characters move outside the Area.'
	} ));

	AddToLibrary( new Spell( { name : 'CONE OF COLD',
	 level : '5',
	 school : 'Weather (Ice)',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 area : '60 ft. cone',
	 duration : 'Instant',
	 savingThrow : 'Reflex half',
	 effect : 'Bitter frost shoots from your fingertips, inflicting 1d6 cold damage per Casting Level (maximum 12d6).'
	} ));

	AddToLibrary( new Spell( { name : 'CONFOUNDING IMAGES',
	 level : '3',
	 school : 'Illusion',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : '1 round per Casting Level',
	 savingThrow : 'Will negates',
	 effect : 'One character may not make free attacks targeting you. He also suffers a –2 penalty with attack checks targeting you and a –2 penalty to his Defense against your attacks.'
	} ));

	AddToLibrary( new Spell( { name : 'CONJURE ELEMENTAL I',
	 level : '1',
	 school : 'Creation (Air, Earth, Fire, or Water)',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'You summon 1 of the following elementals as a standard NPC with a Threat Level equal to your Casting Level. With GM approval, you may modify your choice, choose an elemental from the Bestiary<em>(see page 253)</em>, or build a new NPC, so long as it has the Elemental Type and a maximum XP value of 40.'
	} ));

	AddToLibrary( new Spell( { name : 'CONJURE ELEMENTAL II',
	 level : '3',
	 school : 'Creation (Air, Earth, Fire, or Water)',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'As Conjure Elemental I, except that you gain 1 elemental (max. 60 XP) or 2 elementals (max. 40 XP each).'
	} ));

	AddToLibrary( new Spell( { name : 'CONJURE ELEMENTAL III',
	 level : '5',
	 school : 'Creation (Air, Earth, Fire, or Water)',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'As Conjure Elemental I, except that you gain 1 elemental (max. 80 XP), 2 elementals (max. 60 XP each), or 4 elementals (max. 40 XP each).'
	} ));

	AddToLibrary( new Spell( { name : 'CONJURE ELEMENTAL IV',
	 level : '7',
	 school : 'Creation (Air, Earth, Fire, or Water)',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'As Conjure Elemental I, except that you gain 1 elemental (max. 100 XP), 2 elementals (max. 80 XP each), 4 elementals (max.60 XP each), or 8 elementals (max. 40 XP each).'
	} ));

	AddToLibrary( new Spell( { name : 'CONJURE ELEMENTAL V',
	 level : '9',
	 school : 'Creation (Air, Earth, Fire, or Water)',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'As Conjure Elemental I, except that you gain 1 elemental (max. 120 XP), 2 elementals (max. 100 XP each), 4 elementals (max. 80 XP each), 8 elementals (max. 60 XP each), or 16 elementals (max. 40 XP each).'
	} ));

	AddToLibrary( new Spell( { name : 'CONSECRATE',
	 level : '2',
	 school : 'Word (Aligned)',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 area : '20 ft. sphere',
	 duration : '1 hour per Casting Level',
	 effect : 'This spell anoints an Area, countering Consecrate spells with an opposing Alignment. Undead and outsiders with the same Alignment gain a +2 magic bonus with Morale checks, attack checks, damage, and saves, while those with an opposing Alignment suffer an equivalent penalty (–2 with these checks, damage, and saves). If the Area contains an altar, shrine, or other permanent fixture dedicated to your Alignment, these modifiers are doubled. You cannot consecrate an area with a similar fixture of a faith other than your own.<br>Characters may not be summoned into an Area consecrated with the opposed alignment.'
	} ));

	AddToLibrary( new Spell( { name : 'CONTROL WEATHER I',
	 level : '1',
	 school : 'Weather (Air)',
	 castingTime : '1 full action',
	 distance : 'Personal',
	 area : '200 ft. per Casting Level sphere',
	 duration : '24 hours',
	 effect : 'One cold/heat wave, dust/fog/rain/snow, or wind effect with an action die cost of 1 occurs in the Area<em>(see page 369)</em>. If desired, you may create an “eye” of calm weather up to 80 ft. in diameter around you. The effect builds over 1d6 minutes after casting. Your choice may change with a full action, the new effect building over the next 1d6 minutes.'
	} ));

	AddToLibrary( new Spell( { name : 'CONTROL WEATHER II',
	 level : '3',
	 school : 'Weather (Air)',
	 castingTime : '1 full action',
	 distance : 'Personal',
	 duration : '24 hours',
	 area : '400 ft. per Casting Level sphere',
	 effect : 'As Control Weather I, allowing any effect with an action die cost up to 2.'
	} ));

	AddToLibrary( new Spell( { name : 'CONTROL WEATHER III',
	 level : '5',
	 school : 'Weather (Air)',
	 castingTime : '1 full action',
	 distance : 'Personal',
	 duration : '24 hours',
	 area : '600 ft. per Casting Level sphere',
	 effect : 'As Control Weather I, allowing any effect with an action die cost up to 3 (or any two effects with a cost of 1).'
	} ));

	AddToLibrary( new Spell( { name : 'CONTROL WEATHER IV',
	 level : '7',
	 school : 'Weather (Air)',
	 castingTime : '1 full action',
	 distance : 'Personal',
	 duration : '24 hours',
	 area : '800 ft. per Casting Level sphere',
	 effect : 'As Control Weather I, allowing any effect with an action die cost up to 4 (or any two effects with a cost of 2).'
	} ));

	AddToLibrary( new Spell( { name : 'CONTROL WEATHER V',
	 level : '9',
	 school : 'Weather (Air)',
	 castingTime : '1 full action',
	 distance : 'Personal',
	 duration : '24 hours',
	 area : '1,000 ft. per Casting Level sphere',
	 effect : 'As Control Weather I, allowing any two effects with a cost of 3 or any three effects with a cost of 1.'
	} ));

	AddToLibrary( new Spell( { name : 'COUNTER MAGIC I',
	 level : '3',
	 school : 'Warding',
	 castingTime : '1 full action',
	 distance : 'Touch',
	 duration : 'Instant',
	 effect : 'You counter one spell effect whose Casting Level + Spell Level is equal to or less than your Casting Level + 3. Some effects may not be countered, as noted in their descriptions.'
	} ));

	AddToLibrary( new Spell( { name : 'COUNTER MAGIC II',
	 level : '7',
	 school : 'Warding',
	 distance : 'Personal',
	 area : '15 ft. penetrating sphere',
	 effect : 'As Counter Magic I, except that it affects a total number of Spell Levels equal to your Casting Level × 3 and counters effects whose Casting Level + Spell Level is equal to or less than your Casting Level + 7. Spells are countered in order from the caster outward.'
	} ));

	AddToLibrary( new Spell( { name : 'COUNTER MAGIC III',
	 level : '9',
	 school : 'Warding',
	 area : '30 ft. penetrating sphere',
	 effect : 'As Counter Magic II, except that it targets every spell effect in the Area and counters effects whose Casting Level + Spell Level is equal to or less than your Casting Level + 9.'
	} ));

	AddToLibrary( new Spell( { name : 'CREATE WATER',
	 level : '0',
	 school : 'Creation (Water)',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : 'Instant',
	 effect : 'You create up to 2 gallons of drinkable water per Casting Level. If desired, the water may appear in any open container within the Distance.'
	} ));

	AddToLibrary( new Spell( { name : 'CURE WOUNDS I',
	 level : '1',
	 school : 'Healing (Light)',
	 castingTime : '1 full action',
	 distance : 'Touch',
	 duration : 'Instant',
	 savingThrow : 'Will half (damage vs. undead)',
	 effect : 'You heal 10 damage on a standard character, or 10 vitality or 1 wound on a special character (your choice).'
	} ));

	AddToLibrary( new Spell( { name : 'CURE WOUNDS II',
	 level : '2',
	 school : 'Healing (Light)',
	 castingTime : '1 full action',
	 distance : 'Touch',
	 duration : 'Instant',
	 savingThrow : 'Will half (damage vs. undead)',
	 effect : 'You heal 20 damage on a standard character, or 20 vitality or 3 wounds on a special character (your choice).'
	} ));

	AddToLibrary( new Spell( { name : 'CURE WOUNDS III',
	 level : '3',
	 school : 'Healing (Light)',
	 castingTime : '1 full action',
	 distance : 'Touch',
	 duration : 'Instant',
	 savingThrow : 'Will half (damage vs. undead)',
	 effect : 'You heal 30 damage on a standard character, or 30 vitality or 6 wounds on a special character (your choice).'
	} ));

	AddToLibrary( new Spell( { name : 'CURE WOUNDS IV',
	 level : '4',
	 school : 'Healing (Light)',
	 castingTime : '1 full action',
	 distance : 'Touch',
	 duration : 'Instant',
	 savingThrow : 'Will half (damage vs. undead)',
	 effect : 'You heal 40 damage on a standard character, or 40 vitality or 10 wounds on a special character (your choice).'
	} ));

	AddToLibrary( new Spell( { name : 'CURE WOUNDS I, MASS',
	 level : '5',
	 school : 'Healing (Light)',
	 distance : 'Close',
	 effect : 'As Cure Wounds I, except you heal a number of characters up to your Casting Level.'
	} ));

	AddToLibrary( new Spell( { name : 'CURE WOUNDS II, MASS',
	 level : '6',
	 school : 'Healing (Light)',
	 distance : 'Close',
	 effect : 'As Cure Wounds II, except you heal a number of characters up to your Casting Level.'
	} ));

	AddToLibrary( new Spell( { name : 'CURE WOUNDS III, MASS',
	 level : '7',
	 school : 'Healing (Light)',
	 distance : 'Close',
	 effect : 'As Cure Wounds III, except you heal a number of characters up to your Casting Level.'
	} ));

	AddToLibrary( new Spell( { name : 'CURE WOUNDS IV, MASS',
	 level : '8',
	 school : 'Healing (Light)',
	 distance : 'Close',
	 effect : 'As Cure Wounds IV, except you heal a number of characters up to your Casting Level.'
	} ));

	AddToLibrary( new Spell( { name : 'DANCING LIGHTS',
	 level : '0',
	 school : 'Energy (Light)',
	 castingTime : '1 half action',
	 distance : 'Local',
	 area : '60 ft. sphere',
	 duration : '1 minute (dismissible, enduring)',
	 effect : 'Up to 4 lantern-like lights, 4 glowing spheres, or 1 faint, vaguely humanoid shape appear, each illuminating a 10 ft. radius. The lights can instantly move anywhere in the Area and wink out of existence if they leave. While one or more of them is within 5 ft., you gain a +1 gear bonus with Conceal Action checks and Diversions.'
	} ));

	AddToLibrary( new Spell( { name : 'DARKNESS I',
	 level : '2',
	 school : 'Shadow (Darkness)',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 area : '20 ft. penetrating sphere',
	 duration : '10 minutes per Casting Level (dismissible)',
	 effect : 'One target object radiates overwhelming darkness, eliminating ambient and other non-magical light in the Area.  This effect is suppressed while the object is completely covered by any solid material.'
	} ));

	AddToLibrary( new Spell( { name : 'DARKNESS II',
	 level : '3',
	 school : 'Shadow (Darkness)',
	 area : '60 ft. penetrating sphere',
	 duration : '1 day per Casting Level (dismissible, enduring)',
	 effect : 'As Darkness I, except as noted.'
	} ));

	AddToLibrary( new Spell( { name : 'DEADLY DRAFT I',
	 level : '2',
	 school : 'Weather (Ice)',
	 castingTime : '1 half action',
	 distance : 'Close',
	 area : '25 ft. long line, 10 ft. wide',
	 duration : '3 rounds',
	 savingThrow : 'Fortitude half',
	 effect : 'The Area fills with a chill wind, inflicting a cumulative 1d6 cold damage (e.g. 1d6 during Round 1, 2d6 during Round 2, and 3d6 during Round 3).'
	} ));

	AddToLibrary( new Spell( { name : 'DEADLY DRAFT II',
	 level : '7',
	 school : 'Weather (Ice)',
	 duration : '1 round per 2 Casting Levels',
	 effect : 'As Deadly Draft I, except as noted.'
	} ));

	AddToLibrary( new Spell( { name : 'DEATH KNELL',
	 level : '2',
	 school : 'Necromancy',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : '1 hour',
	 effect : 'You touch an ally, teammate, or adversary who died in the current or previous round, draining their dwindling life force and gaining a +1 bonus to Strength and Casting Level. You may cast this spell only once on each corpse and the maximum bonus you may gain from it is +5.'
	} ));

	AddToLibrary( new Spell( { name : 'DEATHWATCH',
	 level : '1',
	 school : 'Necromancy',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 area : '30 ft. penetrating cone',
	 duration : '10 minutes per Casting Level',
	 effect : 'You instantly know the type and state (alive, dead, or wounded) of each character you can see in the Area.'
	} ));

	AddToLibrary( new Spell( { name : 'DETECT ALIGNMENT',
	 level : '0',
	 school : 'Divination',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 area : '60 ft. penetrating cone',
	 duration : 'Concentration + 1 minute per Casting Level (dismissible)',
	 effect : 'You sense aligned characters and objects. You may learn the Alignment of a character or object you sense with a successful Knowledge check (DC 15).',
	 aux: ks15
	} ));

	AddToLibrary( new Spell( { name : 'DETECT EMOTION',
	 level : '2',
	 school : 'Divination',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 area : '60 ft. penetrating cone',
	 duration : 'Concentration + 1 minute per Casting Level (dismissible)',
	 savingThrow : 'Will negates scene',
	 effect : 'You sense the Dispositions of characters. You may identify the focus of a sensed character’s attention with a successful Knowledge check (DC 15).',
	 aux: ks15
	} ));

	AddToLibrary( new Spell( { name : 'DETECT LIES',
	 level : '4',
	 school : 'Divination',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 area : '60 ft. penetrating cone',
	 duration : 'Concentration + 1 minute per Casting Level (dismissible)',
	 savingThrow : 'Will negates scene',
	 effect : 'You sense lies. You may determine whether a specific person in the Area is lying with a successful Knowledge check (DC 15).',
	 aux: ks15
	} ));

	AddToLibrary( new Spell( { name : 'DETECT MAGIC',
	 level : '1',
	 school : 'Divination',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 area : '60 ft. penetrating cone',
	 duration : 'Concentration + 1 minute per Casting Level (dismissible)',
	 effect : 'You sense magic and magical characters and objects. You may learn the Discipline of any spell you sense with an additional Knowledge check (DC 15).',
	 aux: ks15
	} ));

	AddToLibrary( new Spell( { name : 'DETECT SECRET DOORS',
	 level : '0',
	 school : 'Secrets',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 area : '60 ft. penetrating cone',
	 duration : 'Concentration + 1 minute per Casting Level (dismissible)',
	 effect : 'You sense concealed and secret doors and areas. You may identify the method of opening a door or portal you sense with a successful Knowledge check (DC 15).',
	 aux: ks15
	} ));

	AddToLibrary( new Spell( { name : 'DETECT TRAPS',
	 level : '4',
	 school : 'Secrets',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 area : '60 ft. penetrating cone',
	 duration : 'Concentration + 1 minute per Casting Level (dismissible)',
	 effect : 'You sense mechanical traps with a Stash result up to your Casting Level + 20. You may identify the method of disabling a trap you sense with a successful Knowledge check (DC 15).',
	 aux: ks15
	} ));

	AddToLibrary( new Spell( { name : 'DEVOTION HAMMER',
	 level : '4',
	 school : 'Force (Aligned)',
	 castingTime : '1 half action',
	 distance : 'Local',
	 area : '20 ft. sphere',
	 duration : 'Instant',
	 savingThrow : 'Will half (damage), Will negates (condition)',
	 effect : 'An explosion of power smites all characters who don’t share your Alignment in the Area, leaving them <em> stunned </em>for 1d6 rounds. Each target with an opposing Alignment suffers 1d8 force damage per 2 Casting Levels (maximum 10d8), and each other character suffers 1d4 force damage per 2 Casting Levels (maximum 10d4).'
	} ));

	AddToLibrary( new Spell( { name : 'DIMENSION DOOR',
	 level : '4',
	 school : 'Compass',
	 castingTime : '1 full action',
	 distance : 'Personal or Touch',
	 duration : 'Instant',
	 savingThrow : 'Will negates',
	 effect : 'You instantly move to any location within 1,000 ft. and may bring along 1 willing character per 3 Casting Levels. ' +
					'All transported characters must be touching each other and at least 1 of them must be touching you.<br>' +
					'If any character arrives in a square occupied by solid material, the character and the material each suffer ' +
					'1d6 lethal damage and the character appears in a random adjacent and unoccupied square. If no adjacent squares ' +
					'are unoccupied, the character reappears back where he was before the spell was cast.<br><br>'
	} ));

	AddToLibrary( new Spell( { name : 'DISGUISE SELF',
	 level : '1',
	 school : 'Shapeshifting',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : '10 minutes per Casting Level (dismissible)',
	 effect : 'Your look and that of your immediate possessions changes,<br>granting you a Disguise result equal to your Spellcasting result (minimum 20).<br>Your appearance reverts if you’re knocked unconscious or killed before the spell ends.'
	} ));

	AddToLibrary( new Spell( { name : 'DISINTEGRATE',
	 level : '6',
	 school : 'Compass',
	 castingTime : '1 half action',
	 distance : 'Medium range attack',
	 duration : 'Instant',
	 savingThrow : 'Fortitude half (terminal)',
	 effect : 'One character suffers 1d10 damage per Casting Level (maximum 14d10). If the target’s wounds drop to 0 or below as a result, he and his belongings are destroyed.  Alternately, Disintegrate destroys and annihilates objects and scenery within a 10 ft. cube, even if it’s magical. Only artifacts resist this effect.'
	} ));

	AddToLibrary( new Spell( { name : 'DIVINE FAVOR',
	 level : '1',
	 school : 'Glory',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : '1 minute',
	 effect : 'You gain a magic bonus with attack and damage rolls equal to 1/3 your Casting Level (rounded up).'
	} ));

	AddToLibrary( new Spell( { name : 'DIVINE POWER',
	 level : '4',
	 school : 'Glory',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : '1 round per Casting Level',
	 effect : 'Your base attack bonus becomes equal to your Career Level, you gain a +5 magic bonus to Strength, and you gain DR equal to your Casting Level against the next attack that hits you.'
	} ));

	AddToLibrary( new Spell( { name : 'DOMINATE UNDEAD I',
	 level : '2',
	 school : 'Necromancy',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level',
	 savingThrow : 'Will negates scene (terminal) <em>(see Effect)',
	 effect : 'You compel a single standard undead character who can hear you to obey your verbal instructions (even if he doesn’t understand your language). A character with an Intelligence score of 5 or less automatically fails this save and only understands basic commands: “come here,” “go there,” “fight,” “stand still,” and so on.<br>A character with an Intelligence score of 6 or higher remembers the spell and may seek retribution later. Issuing a command that places the character in personal jeopardy immediately grants him another Will save and issuing a suicidal command immediately ends the spell. The spell also ends if you, a teammate, or an ally attacks the character.<br>You may only have a single Dominate spell in effect at any given time.'
	} ));

	AddToLibrary( new Spell( { name : 'DOMINATE UNDEAD II',
	 level : '7',
	 school : 'Necromancy',
	 duration : '1 hour per Casting Level (dismissible)',
	 effect : 'As Dominate Undead I, except you may control a number of standard undead characters up to 1/2 your Casting Level (rounded down).'
	} ));

	AddToLibrary( new Spell( { name : 'EARTHQUAKE',
	 level : '8',
	 school : 'Conversion (Earth)',
	 castingTime : '1 half action',
	 distance : 'Remote',
	 area : '80 ft. penetrating sphere',
	 duration : '1 round',
	 savingThrow : 'Reflex half (dmg), Reflex negates (conditions)',
	 effect : 'An intense but highly localized tremor occurs, inflicting 8d6 lethal damage on all scenery, characters, and objects on the ground. Characters also become <em> sprawled </em>and are <em> stunned </em>for 1d6 rounds.'
	} ));

	AddToLibrary( new Spell( { name : 'ELEMENTAL SHIELD',
	 level : '4',
	 school : 'Energy (Fire or Ice)',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : '1 round per Casting Level (dismissible)',
	 effect : 'Fire or ice covers you, reducing incoming damage of the other element to 1/2 normal (rounded down). Also, anyone who hits you with an unarmed or melee attack that doesn’t have the <em> reach </em>quality suffers 1d6 fire or cold damage + 1 per 2 Casting Levels (maximum +10).'
	} ));

	AddToLibrary( new Spell( { name : 'ENDURE ELEMENTS',
	 level : '0',
	 school : 'Warding',
	 castingTime : '1 half action',
	 distance : 'Personal or Touch',
	 duration : '24 hours',
	 effect : 'One character and his carried gear suffer no harm from hot and cold environments. This spell offers no protection against fire damage or temperature-based attacks.'
	} ));

	AddToLibrary( new Spell( { name : 'ENTANGLE',
	 level : '1',
	 school : 'Nature',
	 castingTime : '1 half action',
	 distance : 'Remote',
	 area : '40 ft. penetrating sphere',
	 duration : '1 minute per Casting Level (dismissible)',
	 savingThrow : 'Reflex partial (repeatable)',
	 effect : 'Plant life wraps and twists around characters in the Area and those who enter, leaving Large and smaller victims <em> entangled </em>and unable to move until they make their save.<br>This spell may only be cast in areas with vegetation.'
	} ));

	AddToLibrary( new Spell( { name : 'ENTROPIC SHIELD',
	 level : '1',
	 school : 'Warding',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'You’re surrounded by an aura of distorted space that inflicts a –4 penalty with incoming ranged attacks.'
	} ));

	AddToLibrary( new Spell( { name : 'EXPEDITIOUS RETREAT',
	 level : '0',
	 school : 'Compass',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : '1 minute (dismissible)',
	 effect : 'You gain a +20 ft. magic bonus to your Speed when Running.'
	} ));

	AddToLibrary( new Spell( { name : 'FEATHER FALL',
	 level : '0',
	 school : 'Force',
	 castingTime : '1 free action (may be cast anytime, even during another character’s Initiative Count)',
	 distance : 'Close',
	 area : '30 ft. sphere',
	 duration : '1 round per Casting Level',
	 effect : 'A number of freefalling characters and objects up to to your Casting Level descend at 60 ft. per round, suffering no damage if they land during the Duration.'
	} ));

	AddToLibrary( new Spell( { name : 'FIND THE PATH',
	 level : '6',
	 school : 'Divination',
	 castingTime : '1 minute',
	 distance : 'Personal or Touch',
	 duration : 'Instant',
	 effect : 'The target learns the shortest, most direct physical route to a specified destination, even if it winds around corners or through concealed or tight spaces (but not impossible ones — the spell always reveals a route the target can traverse). This spell does reveal traps but not how to disable them, nor does it reveal adversaries and other hostile characters along the route.'
	} ));

	AddToLibrary( new Spell( { name : 'FINGER OF DEATH',
	 level : '7',
	 school : 'Affliction',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : 'Instant',
	 savingThrow : 'Fortitude partial (terminal)',
	 effect : 'If the target fails his save he immediately dies; otherwise he suffers 3d6 damage + 1 per Casting Level. Constructs, elementals, spirits, and undead are unaffected by this spell.'
	} ));

	AddToLibrary( new Spell( { name : 'FIREBALL I',
	 level : '3',
	 school : 'Energy (Fire)',
	 castingTime : '1 half action',
	 distance : 'Medium range attack',
	 area : '20 ft. sphere',
	 duration : 'Instant',
	 savingThrow : 'Reflex half',
	 effect : 'A bead of flame roars from your palm and may travel through any Small or larger opening. At detonation, the fireball inflicts 1d6 fire damage (AP 5) per 2 Casting Levels (maximum 8d6).'
	} ));

	AddToLibrary( new Spell( { name : 'FIREBALL II',
	 level : '7',
	 school : 'Energy (Fire)',
	 effect : 'As Fireball I, inflicting 1d6 fire damage (AP 5) per Casting Level (maximum 16d6). Also, you may delay the detonation by up to 5 rounds.'
	} ));

	AddToLibrary( new Spell( { name : 'FIRE STORM',
	 level : '7',
	 school : 'Energy (Fire)',
	 castingTime : '1 round',
	 distance : 'Local',
	 area : '10 ft. per Casting Level caster-defined',
	 duration : 'Instant',
	 savingThrow : 'Reflex half',
	 effect : 'Flames engulf the Area, inflicting 1d4 fire damage (AP 5) per Casting Level (maximum 16d4).'
	} ));

	AddToLibrary( new Spell( { name : 'FLARE',
	 level : '0',
	 school : 'Energy (Light)',
	 castingTime : '1 half action',
	 distance : 'Close',
	 area : '20 ft. sphere',
	 duration : 'Instant',
	 savingThrow : 'Fortitude negates',
	 effect : 'A burst of light appears, forcing all characters in the Area who can see it to make a Fortitude save or suffer a –1 magic penalty with attack checks for 1d6 rounds.'
	} ));

	AddToLibrary( new Spell( { name : 'FLAWLESS FIB',
	 level : '4',
	 school : 'Secrets',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : '10 minutes per Casting Level (dismissible)',
	 effect : 'You gain a +10 magic bonus with Bluff checks and Spell Defense equal to your Casting Level + 15 against spells that force you to speak the truth or reveal that you’re lying.'
	} ));

	AddToLibrary( new Spell( { name : 'FLY I',
	 level : '3',
	 school : 'Force',
	 castingTime : '1 half action',
	 distance : 'Personal or Touch',
	 duration : '1 minute per Casting Level',
	 effect : 'One character gains the ability to fly at a Speed of 45 ft. (with up to a light load) or 30 ft. (with a heavy load); a character with a heavier load cannot fly. The target may ascend at 1/2 this Speed and descend at twice this Speed. Because the target isn’t anchored while flying, his Size is considered 2 categories smaller when resisting Bull Rush and Grapple actions.<br>If the target is still airborne when the spell ends or is countered or suppressed, he immediately falls.'
	} ));

	AddToLibrary( new Spell( { name : 'FLY II',
	 level : '5',
	 school : 'Force',
	 castingTime : '1 half action',
	 distance : 'Personal or Touch',
	 duration : '1 hour per Casting Level',
	 effect : 'One character gains the ability to fly at a Speed of 60 ft. (with up to a light load) or 40 ft. (with a heavy load); a character with a heavier load cannot fly. The target may ascend at 1/2 this Speed and descend at twice this Speed. Because the target isn’t anchored while flying, his Size is considered 2 categories smaller when resisting Bull Rush and Grapple actions.<br>If the target is still airborne when the spell ends or is countered or suppressed, he immediately falls.'
	} ));

	AddToLibrary( new Spell( { name : 'FREEDOM OF MOVEMENT',
	 level : '4',
	 school : 'Shapeshifting',
	 castingTime : '1 half action',
	 distance : 'Personal or Touch',
	 duration : '10 minutes per Casting Level',
	 effect : 'The target can move and make melee and unarmed attacks normally, even while under the influence of movement impeding magic and similar effects. Also, the target can’t be grappled.'
	} ));

	AddToLibrary( new Spell( { name : 'GEAS',
	 level : '4',
	 school : 'Charm (Curse)',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 day per Casting Level (dismissible, enduring)',
	 savingThrow : 'Will negates (terminal)',
	 effect : 'You compel a single character who can hear and understand you to follow a specific set of instructions, or to refrain from a specific set of actions. You cannot direct the target to commit suicide or perform acts that would result in certain death.<br>If the target is prevented from obeying the instructions for 24 hours, he suffers 2 temporary impairment with each attribute.<br>This impairment increases by 2 per day he’s prevented from obeying (maximum penalty of 8 to each, to a minimum score of 1 in each). This impairment is lost when the target is once again able to obey.<br>This spell ends when dismissed, when the target completes the instructions, or when the Duration ends, whichever comes first.'
	} ));

	AddToLibrary( new Spell( { name : 'GLOW I',
	 level : '0',
	 school : 'Energy (Light)',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 area : '30 ft. sphere (bright light) + 30 ft. sphere (dim light)',
	 duration : '10 minutes per Casting Level (dismissible)',
	 effect : 'The target glows, lighting the Area. This effect moves with the target and is concealed if the target is covered.'
	} ));

	AddToLibrary( new Spell( { name : 'GLOW II',
	 level : '3',
	 school : 'Energy (Light)',
	 area : '60 ft. sphere (intense light) + additional 60 ft. sphere (bright light) + additional 60 ft. sphere (dim light)',
	 effect : 'As Glow I, except as noted.'
	} ));

	AddToLibrary( new Spell( { name : 'GLYPH OF PROTECTION I',
	 level : '3',
	 school : 'Seals',
	 castingTime : '10 minutes',
	 distance : 'Touch',
	 area : '1 object or up to 5 ft. × 5 ft. per Casting Level penetrating caster-defined',
	 duration : 'Permanent (dismissible)',
	 savingThrow : 'Reflex half (damage) or as triggered spell',
	 prepCost : '2',
	 effect : 'You create a magical trap safeguarding an object or area. You define the trap’s trigger, which is typically when a character opens or touches the object, or enters the area, but it can be further refined by intruder Alignment, species, Type, and/ or physical characteristics (such as height and weight). You may also establish a verbal password that disables the trap. An object or area may only be protected by one magical trap at a time.<br>Finally, you may apply one of two protective glyphs.<br><em> Blast Glyph: </em>When triggered, the trap inflicts 1d8 damage per 2 Casting Levels (max. 5d8) to all characters within 5 ft. You may set the damage type as acid, cold, fire, force, electricity, or sonic.<br><em> Spell Glyph: </em>When triggered, the trap automatically casts a harmful spell (up to Level 3) that you know. The spell’s Area, if any, is centered on the intruder. Spell effects are determined using your Casting Level when the glyph is placed. If a Spellcasting check is called for, it’s equal to your Spellcasting bonus + 10. If the spell summons characters, they appear as close as possible to the intruder and attack.'
	} ));

	AddToLibrary( new Spell( { name : 'GLYPH OF PROTECTION II',
	 level : '6',
	 school : 'Seals',
	 prepCost : '5',
	 effect : 'As Glyph of Protection I, except that a blast glyph inflicts up to 10d8 damage and a spell glyph can store a single spell up to Level 6.'
	} ));

	AddToLibrary( new Spell( { name : 'GOODBERRY',
	 level : '2',
	 school : 'Nature',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : '1 day per Casting Level',
	 effect : 'You gain 2d6 magical berries that each operate as any 1 food the eater desires (the choice is made when the berry is consumed). The berries spoil when the Duration ends.'
	} ));

	AddToLibrary( new Spell( { name : 'GUST OF WIND',
	 level : '2',
	 school : 'Weather (Air)',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 area : '60 ft. long line, 15 ft. wide',
	 duration : '1 round',
	 effect : 'Unanchored characters and objects are hit by a Huge Bull Rush result equal to the Spellcasting result.'
	} ));

	AddToLibrary( new Spell( { name : 'HARM',
	 level : '6',
	 school : 'Necromancy (Darkness)',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : 'Instant',
	 savingThrow : 'Will half',
	 effect : 'You flood 1 character with negative energy, inflicting 10 points of damage per Casting Level (maximum 150). This cannot reduce a special character’s wounds to less than 1.'
	} ));

	AddToLibrary( new Spell( { name : 'HASTE',
	 level : '3',
	 school : 'Compass',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : '1 round per Casting Level',
	 effect : 'One character gains 1 additional half action per round and a +1 magic bonus with attack checks and Reflex saves.<br>Each character may be targeted by only 1 Haste spell at a time.<br>This spell counters Slow.'
	} ));

	AddToLibrary( new Spell( { name : 'HEAL',
	 level : '5',
	 school : 'Healing',
	 castingTime : '1 full action',
	 distance : 'Touch',
	 duration : 'Instant',
	 effect : 'One character recovers from disease, poison, and attribute impairment, and loses 3 conditions of your choice.'
	} ));

	AddToLibrary( new Spell( { name : 'HEAL, MASS',
	 level : '9',
	 school : 'Healing',
	 castingTime : '1 full action',
	 distance : 'Close',
	 effect : 'As Heal, except targeting a number of characters up to your Casting Level.'
	} ));

	AddToLibrary( new Spell( { name : 'HEROES’ FEAST',
	 level : '6',
	 school : 'Creation',
	 castingTime : '10 minutes',
	 distance : 'Close',
	 duration : '12 hours',
	 effect : 'You serve up a great magical feast, including a magnificent table and chairs, servants, and food and drink for 1 character per Casting Level. The feast takes 1 hour to consume and fully sustains each character for the day. It also cures all disease, removes the <em> sickened </em>condition, and grants DR 10 against the next hit that each character suffers during the current scene. For the next 12 hours each character also becomes immune to poison and gains a +1 morale bonus with attack checks and Will saves.<br>If the feast is interrupted for any reason, the spell is ruined and the characters gain no benefit.'
	} ));

	AddToLibrary( new Spell( { name : 'HEROISM I',
	 level : '3',
	 school : 'Blessing',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : '10 minutes per Casting Level',
	 effect : 'One character gains a +2 morale bonus with attack checks, saves, and skill checks. He also gains Spell Defense 20 against Shadow spells.'
	} ));

	AddToLibrary( new Spell( { name : 'HEROISM II',
	 level : '6',
	 school : 'Blessing',
	 effect : 'As Heroism I, except the bonus is +4 and the Spell Defense is 30.'
	} ));

	AddToLibrary( new Spell( { name : 'HEROISM III',
	 level : '9',
	 school : 'Blessing',
	 effect : 'As Heroism I, except the bonus is +6 and the Spell Defense is 40.'
	} ));

	AddToLibrary( new Spell( { name : 'HINDSIGHT',
	 level : '7',
	 school : 'Divination',
	 castingTime : '10 minutes',
	 distance : 'Personal',
	 area : '20 ft. sphere',
	 duration : 'Concentration + 1 minute per Casting Level',
	 prepCost : 'Varies <em>(see Effect)</em>',
	 effect : 'You project your vision and hearing back in time at your current location. You may observe events in real time or skim them at up to 60 times their normal rate (e.g. observing a minute in a second). The maximum time you may project back is 24 hours per 1 Preparation Cost.'
	} ));

	AddToLibrary( new Spell( { name : 'HOLD ANIMAL',
	 level : '2',
	 school : 'Nature',
	 castingTime : '1 half action',
	 distance : 'Local',
	 duration : '1 round per Casting Level (dismissible)',
	 savingThrow : 'Will negates (repeatable, terminal)',
	 effect : 'One animal becomes<em> paralyzed</em>.'
	} ));

	AddToLibrary( new Spell( { name : 'HOLD PERSON',
	 level : '2',
	 school : 'Charm',
	 castingTime : '1 half action',
	 distance : 'Local',
	 duration : '1 round per Casting Level (dismissible)',
	 savingThrow : 'Will negates (repeatable, terminal)',
	 effect : 'One character who shares a Type with you becomes <em> paralyzed.</em>'
	} ));

	AddToLibrary( new Spell( { name : 'IDENTIFY I',
	 level : '1',
	 school : 'Artifice',
	 castingTime : '8 hours',
	 distance : 'Touch',
	 duration : 'Instant',
	 prepCost : '1',
	 effect : 'You learn whether an object is magical (and if so what it does, how to activate it, and any remaining charges).'
	} ));

	AddToLibrary( new Spell( { name : 'IDENTIFY II',
	 level : '6',
	 school : 'Artifice',
	 castingTime : '1 full action',
	 duration : '3 rounds',
	 prepCost : '3',
	 effect : 'As Identify I<em>, </em>except targeting 1 object per round.'
	} ));

	AddToLibrary( new Spell( { name : 'ILLUSIONARY IMAGE I',
	 level : '1',
	 school : 'Illusion',
	 castingTime : '1 half action',
	 distance : 'Remote',
	 area : '10 ft. per Casting Level penetrating cube',
	 duration : 'Concentration + 1 round',
	 savingThrow : 'Will negates (disbelief)',
	 effect : 'You create a visual illusion of any size and shape. The illusion doesn’t exhibit sound, smell, texture, or temperature but it can move and animate, so long as it remains entirely in the Area.'
	} ));

	AddToLibrary( new Spell( { name : 'ILLUSIONARY IMAGE II',
	 level : '2',
	 school : 'Illusion',
	 duration : 'Concentration + 2 rounds',
	 effect : 'As Illusionary Image I, except the illusion may include minor sounds (but not speech).'
	} ));

	AddToLibrary( new Spell( { name : 'ILLUSIONARY IMAGE III',
	 level : '3',
	 school : 'Illusion',
	 duration : 'Concentration + 3 rounds',
	 effect : 'As Illusionary Image II, except the illusion may include speech, smell, and non-damaging heat.'
	} ));

	AddToLibrary( new Spell( { name : 'ILLUSIONARY IMAGE IV',
	 level : '4',
	 school : 'Illusions',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'As Illusionary Image III, except the illusion may follow a script, eliminating the need for you to concentrate.'
	} ));

	AddToLibrary( new Spell( { name : 'ILLUSIONARY IMAGE V',
	 level : '5',
	 school : 'Illusion',
	 duration : 'Special <em>(see Effect)</em>',
	  effect : 'As Illusionary Image IV, except the illusion remains dormant until a trigger of your choice occurs (typically someone entering or approaching the Area), after which it lingers for 1 round per Casting Level. The trigger must rely on things that can be seen, heard, smelled, or felt in the Area.'
	} ));

	AddToLibrary( new Spell( { name : 'ILLUSIONARY IMAGE VI',
	 level : '6',
	 school : 'Illusion',
	 duration : 'Permanent',
	 effect : 'As Illusionary Image V, except the illusion is permanent. You may control the illusion while concentrating, leave, and return to concentrate and control it again. The illusion resumes its script when you’re away.'
	} ));

	AddToLibrary( new Spell( { name : 'INSANITY I',
	 level : '2',
	 school : 'Charm',
	 castingTime : '1 full action',
	 distance : 'Touch',
	 duration : '1 round per Casting Level',
	 savingThrow : 'Will negates (repeatable)',
	 effect : 'One character behaves randomly for the Duration.At the start of the target’s Initiative Count each round, roll 1d20 and consult Table 3.3: Insanity.<table><tr><th colspan=\"2\">Table 3.3: Insanity</th><tr><tr><th>Result Behavior</th></tr><tr><td>1–2</td><td>Character is unaffected</td></tr><tr><td>3–8</td><td>Character becomes <em> stunned</em></td></tr><tr><td>9–14</td><td>Character becomes <em> frightened </em>of the caster</td></tr><tr><td>15–20</td><td>Character becomes <em> enraged</em></td></tr></table>'
	} ));

	AddToLibrary( new Spell( { name : 'INSANITY II',
	 level : '5',
	 school : 'Charm',
	 distance : 'Local',
	 duration : '1 minute per Casting Level',
	 effect : 'As Insanity I, except targeting 1 character and all other characters adjacent to him.'
	} ));

	AddToLibrary( new Spell( { name : 'INSANITY III',
	 level : '8',
	 school : 'Charm (Curse)',
	 distance : 'Local',
	 duration : '1 day per Casting Level (dismissible, enduring)',
	 savingThrow : 'Will negates (terminal)',
	 effect : 'As Insanity I, except as noted.'
	} ));

	AddToLibrary( new Spell( { name : 'INSIGHT',
	 level : '1',
	 school : 'Divination',
	 castingTime : '1 minute',
	 distance : 'Personal',
	 duration : 'Instant',
	 effect : 'You gain a GM hint relating to the goals of the current scene. This spell may only be cast once per scene.'
	} ));

	AddToLibrary( new Spell( { name : 'INVISIBILITY',
	 level : '3',
	 school : 'Secrets',
	 castingTime : '1 half action',
	 distance : 'Personal or Touch',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'One character or object weighing no more than 100 lbs. per Casting Level become<em> invisible</em>.<br>Gear carried by a target character also becomes<em> invisible</em>, though items dropped or put down become visible again.<br>Items picked up disappear if tucked into an invisible character’s clothing or bags.<br>This spell ends when the target character makes an attack.'
	} ));

	AddToLibrary( new Spell( { name : 'INVISIBILITY, MASS',
	 level : '8',
	 school : 'Secrets',
	 distance : 'Remote',
	 effect : 'As Invisibility, except targeting a combined number of characters and objects up to your Casting Level. The effect is mobile with the group and the spell ends when anyone in the target group attacks. Individuals in the group cannot see each other.<br>The spell also ends for any individual who moves more than 400 ft. from the nearest other member of the group. If only two individuals are affected, the one moving becomes visible. If both are moving away from each other, they both become visible.'
	} ));

	AddToLibrary( new Spell( { name : 'IRON BODY',
	 level : '8',
	 school : 'Shapeshifting',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : '1 minute per Casting Level',
	 prepCost : '5',
	 effect : 'Your body becomes living iron, making you a construct with DR 15 and Slam III. Your Strength score rises by 6 and you suffer only 1/2 fire and acid damage (rounded up).<br>However, your Dexterity score drops by 6, your Speed drops to 1/2 normal (rounded up), and you suffer a –8 Armor Check Penalty<em>(see page 173)</em>. Your weight is multiplied by 10.'
	} ));

	AddToLibrary( new Spell( { name : 'JUMP',
	 level : '1',
	 school : 'Shapeshifting',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'One character gains a magic bonus with Jump checks equal to 3 × your Casting Level (maximum +30). Also, his Jump distances aren’t limited by his height.'
	} ));

	AddToLibrary( new Spell( { name : 'KEEN EDGE',
	 level : '3',
	 school : 'Conversion',
	 castingTime : '1 half action',
	 distance : 'Local',
	 duration : '10 minutes per Casting Level',
	 effect : 'One edged weapon or 50 hurled ammo becomes magically sharp, gaining a +2 magic bonus to threat range.'
	} ));

	AddToLibrary( new Spell( { name : 'KNOCK',
	 level : '2',
	 school : 'Force',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : 'Special <em>(see Effect)</em>',
	 effect : 'One door, lock, container, or restraint is opened or released if your Spellcasting result beats its Complexity.  Alternately, one Arcane Lock is suppressed for 1 minute per Casting Level.'
	} ));

	AddToLibrary( new Spell( { name : 'LEVITATE',
	 level : '2',
	 school : 'Force',
	 castingTime : '1 half action',
	 distance : 'Personal or Close',
	 duration : '1 minute per Casting Level (dismissible)',
	 savingThrow : 'Will negates (harmless)',
	 effect : 'Once per round as a half action, you may vertically move 1 unanchored character or object weighing up to 100 lbs.<br>per Casting Level at a Speed of 20 ft. You may not move the target horizontally but a target character may propel himself along an available surface at 1/2 his Speed (rounded up).<br>A levitated character who attacks finds himself increasingly unstable, suffering a cumulative –1 penalty (–1 with the first attack, –2 with the second, and so on, to a maximum of –5).<br>He may spend 1 full round to stabilize himself, negating this penalty.'
	} ));

	AddToLibrary( new Spell( { name : 'LIFT CURSE I',
	 level : '3',
	 school : 'Blessing',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : 'Instant',
	 effect : 'One character or object loses curses with a Casting Level + Spell Level equal to or less than your Casting Level + 3.'
	} ));

	AddToLibrary( new Spell( { name : 'LIFT CURSE II',
	 level : '6',
	 school : 'Blessing',
	 effect : 'As Lift Curse I, except removing curses with a Casting Level + Spell Level equal to or less than your Casting Level + 6.'
	} ));

	AddToLibrary( new Spell( { name : 'LIFT CURSE III',
	 level : '9',
	 school : 'Blessing',
	 effect : 'As Lift Curse I, except removing curses with a Casting Level + Spell Level equal to or less than your Casting Level + 9.'
	} ));

	AddToLibrary( new Spell( { name : 'LIGHTNING BOLT I',
	 level : '4',
	 school : 'Weather (Lightning)',
	 castingTime : '1 half action',
	 distance : 'Personal ranged attack',
	 area : '100 ft. + 10 ft. per Casting Level line',
	 duration : 'Instant',
	 savingThrow : 'Reflex half',
	 effect : 'You discharge powerful electrical energy across the Area, inflicting 1d6 electrical damage per 2 Casting Levels (maximum 10d6).'
	} ));

	AddToLibrary( new Spell( { name : 'LIGHTNING BOLT II',
	 level : '6',
	 school : 'Weather (Lightning)',
	 area : '10 ft. per Casting Level caster-defined',
	 effect : 'As Lightning Bolt I, except the first target hit suffers 1d6 electrical damage per Casting Level (maximum 14d6), and each target hit thereafter suffers 4 less damage than the target before him.'
	} ));

	AddToLibrary( new Spell( { name : 'LIGHT’S GRACE',
	 level : '5',
	 school : 'Blessing (Light)',
	 castingTime : '1 half action',
	 distance : 'Personal or Touch',
	 duration : '1 minute per Casting Level',
	 effect : 'One character gains 25 Resistance against damage from Darkness spells.'
	} ));

	AddToLibrary( new Spell( { name : 'LIVING LIBRARY I',
	 level : '2',
	 school : 'Divination',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : '1 hour per Casting Level',
	 effect : 'You gain a +2 magic bonus with Research checks.<br>As a half action, you may end this spell early to gain a +2 magic bonus with a single Knowledge check.'
	} ));

	AddToLibrary( new Spell( { name : 'LIVING LIBRARY II',
	 level : '5',
	 school : 'Divination',
	 effect : 'As Living Library I, except that you gain a +4 magic bonus with Research checks and may end the spell early to gain a +4 magic bonus with a single Knowledge check.'
	} ));

	AddToLibrary( new Spell( { name : 'LIVING LIBRARY III',
	 level : '8',
	 school : 'Divination',
	 effect : 'As Living Library I, except that you gain a +10 magic bonus with Research checks and may end the spell early to gain a +10 magic bonus with a single Knowledge check.'
	} ));

	AddToLibrary( new Spell( { name : 'LOCATE OBJECT',
	 level : '2',
	 school : 'Divination',
	 castingTime : '1 minute',
	 distance : 'Unlimited',
	 duration : '1 hour per Casting Level',
	 effect : 'You sense the direction of a familiar object, or the nearest object of a general type (e.g. sword, coin, jewel, etc.).'
	} ));

	AddToLibrary( new Spell( { name : 'MAGE ARMOR',
	 level : '2',
	 school : 'Force',
	 castingTime : '1 half action',
	 distance : 'Personal or Touch',
	 duration : '1 hour (dismissible)',
	 effect : 'An invisible but tangible field of force surrounds the target, granting him a +4 gear bonus to Defense.'
	} ));

	AddToLibrary( new Spell( { name : 'MAGE SCRIBE I',
	 level : '1',
	 school : 'Word',
	 castingTime : 'Varies <em>(see Effect)</em>',
	 distance : 'Touch',
	 duration : 'Permanent (dismissible)',
	 effect : 'You create script and images on any surface at the rate of 1,000 words or 1 image per hour, or copy an existing document at the rate of 1,000 words or 1 image per minute.<br>The words may be written in any language you know other than arcane script<em>(see pages 61 and 142)</em>.'
	} ));

	AddToLibrary( new Spell( { name : 'MAGE SCRIBE II',
	 level : '4',
	 school : 'Word',
	 effect : 'As Mage Scribe I, except you may embed 1 of your Interests into the script. The next character without the Interest who reads the text in full gains the Interest until the end of the current adventure. The script may only transfer the Interest once; thereafter, it acts as described in Mage Scribe I.'
	} ));

	AddToLibrary( new Spell( { name : 'MAGIC AURA',
	 level : '1',
	 school : 'Secrets',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : '1 day per Casting Level (dismissible)',
	 savingThrow : 'Will negates (disbelief)',
	 effect : 'When identified<em>(see pages 77 and 133)</em>, one item weighing up to 5 lbs. per Casting Level may appear non-magical, magical with Essence(s) and Charm(s) of your choice, or the target of a spell you choose.'
	} ));

	AddToLibrary( new Spell( { name : 'MAGIC MISSILE',
	 level : '1',
	 school : 'Force',
	 castingTime : '1 half action',
	 distance : 'Short range',
	 duration : 'Instant',
	 effect : 'You may fire 3 missiles at targets you can see, each missile inflicting 1d6 force damage.'
	} ));

	AddToLibrary( new Spell( { name : 'MAGIC STONE',
	 level : '1',
	 school : 'Conversion (Earth)',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : '1 hour (dismissible)',
	 effect : 'You transmute up to 3 pebbles into magic hurled ammunition, each inflicting a different type of damage.'
	} ));

	AddToLibrary( new Spell( { name : 'MAGIC VESTMENT I',
	 level : '0',
	 school : 'Conversion',
	 castingTime : '1 full action',
	 distance : 'Touch',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'You imbue a set of clothes, a piece of armor, or a shield with a +1 magic bonus to Defense.'
	} ));

	AddToLibrary( new Spell( { name : 'MAGIC VESTMENT II',
	 level : '3',
	 school : 'Conversion',
	 duration : '1 hour (dismissible)',
	 effect : 'As Magic Vestment I, except that it grants a +1 magic bonus per 4 Casting Levels.'
	} ));

	AddToLibrary( new Spell( { name : 'MAGIC WEAPON I',
	 level : '1',
	 school : 'Conversion',
	 castingTime : '1 full action',
	 distance : 'Touch',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'You grant a weapon or 50 ammo a +1 magic bonus with attack checks and damage rolls. You can’t cast this spell on natural attacks, extraordinary attacks, or unarmed attacks.'
	} ));

	AddToLibrary( new Spell( { name : 'MAGIC WEAPON II',
	 level : '4',
	 school : 'Conversion',
	 duration : '1 hour (dismissible)',
	 effect : 'As Magic Weapon I, except that it grants a +1 magic bonus per 4 Casting Levels.'
	} ));

	AddToLibrary( new Spell( { name : 'MANTLE OF THE MUNDANE',
	 level : '4',
	 school : 'Artifice',
	 castingTime : '1 full action',
	 distance : 'Touch',
	 duration : '1 round per Casting Level',
	 savingThrow : 'Will negates',
	 effect : 'All magic bonuses affecting one character and all adjacent characters and objects decrease by 1 per 5 Casting Levels (minimum 1).'
	} ));

	AddToLibrary( new Spell( { name : 'MARK OF JUSTICE',
	 level : '5',
	 school : 'Seals (Curse)',
	 castingTime : '10 minutes',
	 distance : 'Touch',
	 duration : '1 day per Casting Level (dismissible, enduring)',
	 effect : 'You draw an indelible mark on a character and identify an action that triggers it. When the character performs the action, the mark curses him, targeting him with a successful Bestow Curse spell<em>(see page 117)</em>.'
	} ));

	AddToLibrary( new Spell( { name : 'MAZE',
	 level : '8',
	 school : 'Compass',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : '10 minutes',
	 effect : 'You imprison one character in a labyrinthine gap between worlds. The spell ends early if the character makes a successful 1-minute Knowledge check (DC 15 + your Casting Level), or if the character is targeted with a successful spell that transfers him back to this world.<br>At the character’s return, he appears at his previous location, or in the nearest unoccupied square.'
	} ));

	AddToLibrary( new Spell( { name : 'MIND BLANK',
	 level : '8',
	 school : 'Secrets',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : '24 hours',
	 savingThrow : 'Will negates (harmless)',
	 effect : 'One character’s thoughts and emotions can’t be read.<br>Also, the character can’t be magically observed in his location and Divination spells targeting him automatically fail.'
	} ));

	AddToLibrary( new Spell( { name : 'MIND PROBE',
	 level : '6',
	 school : 'Divination',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : '1 round per Casting Level (dismissible)',
	 savingThrow : 'Will negates scene',
	 effect : 'All the subjectʼs memories and knowledge are accessible to you, from memories deep below the surface to those still easily called to mind. You can learn the answer to one question per round, to the best of the subjectʼs knowledge.'
	} ));

	AddToLibrary( new Spell( { name : 'DOMINATE',
	 level : '6',
	 school : 'Charm',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 day per Casting Level (dismissible, enduring)',
	 savingThrow : 'Will negates (terminal)',
	 effect : 'You can control the actions of the target creature through a telepathic link that you establish with the subjectʼs mind. If you and the subject have a common language, you can generally force the subject to perform as you desire, within the limits of its abilities. If no common language exists, you can communicate only basic commands. You cannot direct the target to commit suicide or perform acts that would result in certain death. While the telepathic contact is limited by the range of the spell, the target continues to follow any instructions it was given after it leaves the range.'
	} ));

	AddToLibrary( new Spell( { name : 'MIND SEED',
	 level : '9',
	 school : 'Charm',
	 castingTime : '1 round',
	 distance : 'Touch',
	 duration : 'Permanent',
	 prepCost : '10',
	 savingThrow : 'Will negates (terminal)',
	 effect : 'You impress an alternate personality into the subjectʼs subconscious. If successfully implanted, this seed germinates over a period of 9 days. At the end of that period, the new personality replaces the old personality, and it is no longer possible to dispel the magic. The new persona retains all memories and abilities of the subject, but is governed by a personality designed by the spell caster.'
	} ));

	AddToLibrary( new Spell( { name : 'MIND SWITCH',
	 level : '9',
	 school : 'Charm',
	 castingTime : '1 round',
	 distance : 'Touch',
	 duration : '1 day per Casting Level (dismissible, enduring)',
	 prepCost : '10',
	 savingThrow : 'Will negates (terminal)',
	 effect : 'You can attempt to take control of a nearby living creature, forcing your mind (and soul) into its body, and its mind into your body. At the end of the duration, the minds switch back to their original bodies. If either creature is killed while this spell is in effect, then the other also dies when the spell ends.'
	} ));

	AddToLibrary( new Spell( { name : 'MIRROR IMAGES',
	 level : '2',
	 school : 'Illusion',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'You create multiple illusory copies of yourself, masking your true location. You create 1d4 copies + 1 per 3 Casting Levels (maximum 8). The copies spread out but each remains within 5 ft. of either you or another copy at all times. The copies mimic your actions as you take them. They can pass through each other and you through them, though they feel solid to others.<br>It’s impossible to visually discern you and the copies from each other so a random target is determined each time someone engages any of you. Each copy has a Defense of 10 + your Dexterity modifier and immediately vanishes when hit.'
	} ));

	AddToLibrary( new Spell( { name : 'MOVE EARTH',
	 level : '5',
	 school : 'Conversion (Earth)',
	 castingTime : '1 full action',
	 distance : 'Remote',
	 duration : 'Permanent',
	 effect : 'For every 10 minutes you concentrate (to a maximum of 1 hour), you reshape a different flat patch of soil (e.g. clay, dirt, loam, or sand). Each patch may be up to your Casting Level × 10 ft. on a side and up to 10 ft. deep. The reshaping forms wavelike crests and troughs but has no impact on stone and can’t dramatically reform the land. Trees, buildings, rock formations, and other solid landmarks are unaffected outside elevation and relative topography. You cannot use this spell to tunnel and it’s too slow to trap or bury others. Its primary uses are digging moats, reshaping rivers, and adjusting terrain contours before a battle (collapsing embankments, moving hillocks, shifting dunes, and the like).'
	} ));

	AddToLibrary( new Spell( { name : 'MOVE WATER',
	 level : '4',
	 school : 'Conversion (Water)',
	 castingTime : '1 full action',
	 distance : 'Remote',
	 duration : 'Concentration, up to 1 hour',
	 effect : 'You reshape or redirect a cubic volume of liquid up your Casting Level × 10 ft. on a side and may hold it in any shape, even against gravity. You can pull air through the surface of the liquid to form breathable air pockets. You can also create whirlpools, eddies, and other natural currents in the liquid, requiring a successful Swim or Ride check (DC 20 + your Casting Level) to avoid or escape.'
	} ));

	AddToLibrary( new Spell( { name : 'NATURAL ATTUNEMENT',
	 level : '5',
	 school : 'Nature',
	 castingTime : '10 minutes',
	 distance : 'Personal',
	 duration : 'Instant',
	 prepCost : '3',
	 effect : 'You become one with nature, gaining knowledge of the surrounding region (out to 1 mile per Casting Level). You gain 3 hints about the terrain, animals, plants, minerals, bodies of water, the general state of the natural setting, and the presence of unnatural characters (constructs, horrors, and undead).<br>This spell may only be cast once per scene.'
	} ));

	AddToLibrary( new Spell( { name : 'NATURE’S ALLY I',
	 level : '1',
	 school : 'Nature',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'You summon 1 of the following animals as a standard NPC with a Threat Level equal to your Casting Level. With GM approval, you may modify your choice, choose an animal from the Bestiary<em>(see page 253)</em>, or build a new NPC, so long as it has the Animal Type and a maximum XP value of 40.'
	} ));

	AddToLibrary( new Spell( { name : 'NATURE’S ALLY II',
	 level : '3',
	 school : 'Nature',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'As Nature’s Ally I, except that you gain 1 animal (max. 60 XP) or 2 animals (max. 40 XP each).'
	} ));

	AddToLibrary( new Spell( { name : 'NATURE’S ALLY III',
	 level : '5',
	 school : 'Nature',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'As Nature’s Ally I, except that you gain 1 animal (max. 80 XP), 2 animals (max. 60 XP each), or 4 animals (max. 40 XP each).'
	} ));

	AddToLibrary( new Spell( { name : 'NATURE’S ALLY IV',
	 level : '7',
	 school : 'Nature',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'As Nature’s Ally I, except that you gain 1 animal (max. 100 XP), 2 animals (max. 80 XP each), 4 animals (max. 60 XP each), or 8 animals (max. 40 XP each).'
	} ));

	AddToLibrary( new Spell( { name : 'NATURE’S ALLY V',
	 level : '9',
	 school : 'Nature',
	 castingTime : '1 round',
	 distance : 'Close',
	 duration : '1 minute per Casting Level (dismissible, enduring)',
	 effect : 'As Nature’s Ally I, except that you gain 1 animal (max. 120 XP), 2 animals (max. 100 XP each), 4 animals (max.80 XP each), 8 animals (max. 60 XP each), or 16 animals (max.40 XP each).'
	} ));

	AddToLibrary( new Spell( { name : 'NEUTRALIZE POISON',
	 level : '3',
	 school : 'Healing',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : '10 minutes per Casting Level',
	 savingThrow : 'Will negates',
	 effect : 'Poison within 1 character or an object measuring up to 1 cubic ft. per Casting Level is rendered harmless. For the spell’s Duration, a targeted character becomes immune to poison and a targeted character or item that can produce or convey poison loses that ability.'
	} ));

	AddToLibrary( new Spell( { name : 'OBSCURE OBJECT',
	 level : '2',
	 school : 'Secrets',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : '8 hours (dismissible)',
	 effect : 'You mask 1 object weighing up to 100 lbs. per Casting Level. The object can’t be magically observed in its location and Divination spells targeting it automatically fail.'
	} ));

	AddToLibrary( new Spell( { name : 'ORIENT SELF',
	 level : '0',
	 school : 'Divination',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : 'Instant',
	 effect : 'You sense the direction of north from your current position and gain a +1 magic bonus with Knowledge checks made to navigate from your current location.'
	} ));

	AddToLibrary( new Spell( { name : 'PASS WITHOUT TRACE',
	 level : '1',
	 school : 'Secrets',
	 castingTime : '1 half action',
	 distance : 'Personal or Touch',
	 duration : '1 hour per Casting Level (dismissible)',
	 effect : 'Track checks made to locate one character per Casting Level automatically fail.'
	} ));

	AddToLibrary( new Spell( { name : 'PERMANENCY',
	 level : '6',
	 school : 'Artifice',
	 castingTime : '1 minute',
	 distance : 'Personal or Touch',
	 duration : 'Instant',
	 prepCost : '20 × target spell’s Level (minimum 20)',
	 effect : 'One “enduring” spell becomes permanent and cannot be countered. Your Casting Level must exceed the target spell’s Level by 8 for you to cast this spell.'
	} ));

	AddToLibrary( new Spell( { name : 'PHANTASMAL KILLER',
	 level : '4',
	 school : 'Shadow',
	 castingTime : '1 half action',
	 distance : 'Local',
	 duration : 'Instant',
	 savingThrow : 'Will negates (disbelief), Fortitude partial (death, terminal)',
	 effect : 'You create an illusory creature out of one character’s worst nightmares. Only that character can see the creature and he may attempt to save or disbelieve its existence. With success, the spell ends; otherwise the character must make a Fortitude save or die. With success against this second save, the character suffers 3d6 stress damage. You cannot cast this spell on constructs, elementals, spirits, or undead.'
	} ));

	AddToLibrary( new Spell( { name : 'PHASE DOOR',
	 level : '7',
	 school : 'Compass',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 area : '10 ft. per 5 Casting Levels penetrating caster-defined',
	 duration : '1 week (dismissible, enduring)',
	 effect : 'You create an extra-dimensional corridor across or through the Area with open 10 ft. × 10 ft. doorways at both ends. You disappear when inside the corridor, reappearing when you exit. The corridor is likewise invisible and may overlap with solid matter, allowing you to move freely through walls, hills, and other obstacles.<br>Any number of other characters may enter or pass through the corridor but only with your permission. You can also set a word, phrase, or action to allow entry when you’re not present.'
	} ));

	AddToLibrary( new Spell( { name : 'PINPOINT',
	 level : '8',
	 school : 'Divination',
	 castingTime : '10 minutes',
	 distance : 'Unlimited',
	 duration : 'Instant',
	 savingThrow : 'Will negates scene',
	 effect : 'You learn the exact location of a familiar character or object.'
	} ));

	AddToLibrary( new Spell( { name : 'POLAR RAY I',
	 level : '0',
	 school : 'Weather (Ice)',
	 castingTime : '1 half action',
	 distance : 'Personal range attack',
	 area : '15 ft. line',
	 duration : 'Instant',
	 savingThrow : 'Reflex half',
	 effect : 'You release a spray of freezing air across the Area, inflicting 1d6 cold damage.'
	} ));

	AddToLibrary( new Spell( { name : 'POLAR RAY II',
	 level : '4',
	 school : 'Weather (Ice)',
	 area : '75 ft. line',
	 effect : 'As Polar Ray I, except inflicting 1d6 cold damage per Casting Level (maximum 10d6).'
	} ));

	AddToLibrary( new Spell( { name : 'POWER WORD: HARM',
	 level : '5',
	 school : 'Word',
	 castingTime : '1 free action',
	 distance : 'Close',
	 duration : 'Instant',
	 effect : 'You and a character of your choice suffer 1d6 lethal damage per Casting Level (maximum 12d6), even if they can’t hear you.'
	} ));

	AddToLibrary( new Spell( { name : 'POWER WORD: KILL',
	 level : '9',
	 school : 'Word',
	 castingTime : '1 free action',
	 distance : 'Close',
	 duration : 'Instant',
	 prepCost : '10',
	 effect : 'You and a special character of your choice each suffer enough damage to kill them, even if they can’t hear you.'
	} ));

	AddToLibrary( new Spell( { name : 'POWER WORD:  RECALL',
	 level : '6',
	 school : 'Word',
	 castingTime : '1 free action',
	 distance : 'Close',
	 duration : 'Instant',
	 effect : 'You and a character of your choice are teleported to one of your residences, even if they can’t hear you. All objects the two of you carry or wear are teleported as well.'
	} ));

	AddToLibrary( new Spell( { name : 'POWER WORD: STUN',
	 level : '8',
	 school : 'Word',
	 castingTime : '1 free action',
	 distance : 'Close',
	 duration : 'Instant',
	 effect : 'You and a character of your choice become <em> stunned </em>for 2d4 rounds, even if they can’t hear you.'
	} ));

	AddToLibrary( new Spell( { name : 'PRAYER',
	 level : '3',
	 school : 'Blessing',
	 castingTime : '1 half action',
	 distance : 'Close',
	 area : '40 ft. penetrating sphere',
	 duration : '1 round per Casting Level',
	 effect : 'You and each teammate and ally gain a +1 morale bonus with attack checks, damage rolls, skill checks, and Will saves, while each of your foes suffers a –1 morale penalty with those rolls.'
	} ));

	AddToLibrary( new Spell( { name : 'PROJECT PRESENCE',
	 level : '7',
	 school : 'Illusion',
	 castingTime : '1 half action',
	 distance : 'Local',
	 duration : '1 round per Casting Level (dismissible)',
	 effect : 'You create an illusory version of yourself that mimics your actions (including speech) unless you spend 1 half action concentrating to direct separate actions. You may cast any spell from the projected image and may spend 1 half action concentrating to adopt its senses in place of your own (or vice-versa). This spell ends if the illusory you moves out of your sight.'
	} ));

	AddToLibrary( new Spell( { name : 'PROTECTION FROM ALIGNMENT',
	 level : '1',
	 school : 'Warding (Aligned)',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'One character is surrounded by a magical barrier that moves with him. The barrier grants a +2 gear bonus to Defense and with saves against attacks with an opposing Alignment or made by characters with an opposing Alignment. This bonus increases to +4 against outsiders with an opposing Alignment.'
	} ));

	AddToLibrary( new Spell( { name : 'PROTECTION FROM SPELLS',
	 level : '8',
	 school : 'Warding',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : '10 minutes per Casting Level',
	 prepCost : '5',
	 effect : 'One character per 4 Casting Levels gains a +8 magic bonus with saves prompted by spells.'
	} ));

	AddToLibrary( new Spell( { name : 'PURGE',
	 level : '7',
	 school : 'Word (Aligned)',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 area : '40 ft. penetrating sphere',
	 duration : 'Instant',
	 savingThrow : 'Will half (damage), Will negates (condition, terminal)',
	 effect : 'Characters with an opposing Alignment are <em> sickened </em>for 1d6 minutes and standard characters with an opposing Alignment suffer 3d6 divine damage. Summoned characters with an opposing Alignment are banished.'
	} ));

	AddToLibrary( new Spell( { name : 'QUAKE TOUCH',
	 level : '6',
	 school : 'Energy (Sonic)',
	 castingTime : '1 round',
	 distance : 'Touch',
	 duration : '1 round per Casting Level (dismissible)',
	 effect : 'Each piece of scenery you touch suffers 1d6 sonic damage per Casting Level (maximum 14d6).'
	} ));

	AddToLibrary( new Spell( { name : 'RAY OF ENFEEBLEMENT',
	 level : '1',
	 school : 'Affliction',
	 castingTime : '1 half action',
	 distance : 'Short range attack',
	 duration : '1 minute per Casting Level',
	 effect : 'You inflict 1 temporary Strength impairment per 2 Casting Levels, rounded up (to a minimum Strength of 4).'
	} ));

	AddToLibrary( new Spell( { name : 'READ MAGIC',
	 level : '0',
	 school : 'Word',
	 castingTime : '1 full action',
	 distance : 'Personal',
	 duration : 'Instant',
	 effect : 'You decipher the arcane script on one object or in one area and may thereafter read it without issue.'
	} ));

	AddToLibrary( new Spell( { name : 'READ THOUGHTS',
	 level : '3',
	 school : 'Divination',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : 'Concentration +1 minute per level (dismissible)',
	 savingThrow : 'Will Negates scene',
	 effect : 'You know the surface thoughts of the mind of any creature in the area that fails a will save.  A target that succeeds on its save is not affected by this manifestation of th power, even if it leaves the area and then reenters the area before the duration expires.'
	} ));

	AddToLibrary( new Spell( { name : 'REGENERATE',
	 level : '7',
	 school : 'Healing',
	 castingTime : '1 minute',
	 distance : 'Touch',
	 duration : '2d6 rounds',
	 prepCost : '1',
	 effect : 'One character heals from all critical injuries and regains all severed body parts. This process takes the spell’s full Duration and no benefit is gained if the spell is interrupted before then.  This spell has no effect on constructs, elementals, spirits, or undead.'
	} ));

	AddToLibrary( new Spell( { name : 'REPELLING WAVE I',
	 level : '6',
	 school : 'Force',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 area : '40 ft. cone',
	 duration : 'Instant',
	 effect : 'A wave of energy pushes unanchored characters and objects up to Large Size 40 ft. away from you, inflicting 1d8 force damage + 1 per Casting Level (maximum +14). Larger and anchored characters and objects suffer half this amount (rounded down).'
	} ));

	AddToLibrary( new Spell( { name : 'REPELLING WAVE II',
	 level : '8',
	 school : 'Force',
	 area : '60 ft. sphere',
	 effect : 'As Repelling Wave I, except pushing characters and objects up to Huge Size 60 ft. away from you, inflicting 1d12 force damage + 1 per Casting Level (maximum +18).'
	} ));

	AddToLibrary( new Spell( { name : 'RESILIENT SPHERE I',
	 level : '4',
	 school : 'Force',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : '1 round per Casting Level (dismissible)',
	 savingThrow : 'Reflex negates (terminal)',
	 effect : 'An airtight globe of force encloses 1 character up to Large Size. During each round, the globe absorbs damage inflicted on the target equal to your Casting Level + 30. The character may not leave the sphere and the sphere may not be damaged, though it may be annihilated.'
	} ));

	AddToLibrary( new Spell( { name : 'RESILIENT SPHERE II',
	 level : '8',
	 school : 'Force',
	 effect : 'As Resilient Sphere I, except that once per round as a half action you may move the sphere — and the character within — up to 30 ft.'
	} ));

	AddToLibrary( new Spell( { name : 'RESIST ENERGY',
	 level : '2',
	 school : 'Warding',
	 castingTime : '1 half action',
	 distance : 'Personal or Touch',
	 duration : '10 minutes per Casting Level',
	 effect : 'One character or object gains Acid, Cold, Electrical, Fire, Heat, or Sonic Resistance equal to your Casting Level (your choice).'
	} ));

	AddToLibrary( new Spell( { name : 'RESTORATION I',
	 level : '2',
	 school : 'Healing',
	 castingTime : '1 minute',
	 distance : 'Touch',
	 duration : 'Instant',
	 effect : 'One character heals 1 <em> fatigued </em>grade and 1d4 impairment with 1 attribute of your choice.'
	} ));

	AddToLibrary( new Spell( { name : 'RESTORATION II',
	 level : '4',
	 school : 'Healing',
	 prepCost : '1',
	 effect : 'One character heals all <em> fatigued </em>grades and attribute impairment.'
	} ));

	AddToLibrary( new Spell( { name : 'RESURRECTION I',
	 level : '5',
	 school : 'Blessing',
	 castingTime : '10 minutes',
	 distance : 'Touch',
	 duration : 'Instant',
	 prepCost : '60',
	 effect : 'You restore life to a dead character whose body is whole and present, whose soul is free and willing to return, and, who’s been dead no longer than 1 day per Casting Level. The character wakes with 1 wound point and vitality points equal to his Career or Threat Level. Any attributes of 0 are set to 1. Poisons and diseases in his system are neutralized but any critical injuries remain.'
	} ));

	AddToLibrary( new Spell( { name : 'RESURRECTION II',
	 level : '7',
	 school : 'Blessing',
	 prepCost : '100',
	 effect : 'As Resurrection I, except it may target a character who’s been dead for 1 year per Casting Level. Also, the target’s body may be mostly destroyed, so long as you have at least some remains (e.g. a fingernail, hair, etc.). The character wakes with full wounds and vitality, no longer suffering from critical injuries or impairment.'
	} ));

	AddToLibrary( new Spell( { name : 'RESURRECTION III',
	 level : '9',
	 school : 'Blessing',
	 distance : 'Close',
	 prepCost : '150',
	 effect : 'As Resurrection II, except it may target a character who’s been dead for 5 years per Casting Level, and whose body has been fully destroyed.'
	} ));

	AddToLibrary( new Spell( { name : 'RIGHTEOUS AURA',
	 level : '2',
	 school : 'Word (Aligned)',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : '1 hour per Casting Level',
	 effect : 'You gain a +2 magic bonus with Intimidate checks made against characters with an opposing Alignment. As a half action, you may end this spell early to gain a +6 magic bonus with a single Intimidate check made against a character with an opposing Alignment.'
	} ));

	AddToLibrary( new Spell( { name : 'RUSTING GRASP',
	 level : '4',
	 school : 'Affliction',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 area : '5 ft. sphere',
	 duration : '1 round per Casting Level',
	 effect : 'Each round, non-living, non-magical metal in the Area you touch is destroyed, becoming rusted, pitted, and worthless. Touching a metallic character inflicts 25 points of lethal damage that ignores Damage Reduction.'
	} ));

	AddToLibrary( new Spell( { name : 'SACRED AURA',
	 level : '8',
	 school : 'Warding (Aligned)',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : '1 round per Casting Level (dismissible)',
	 savingThrow : 'Fortitude negates (harmless)',
	 effect : 'One charactrer gains a flickering aura and 3 effects.<br>• +4 magic bonus to Defense and with saves<br>• Spell Defense 25 against spells with an opposing Alignment cast by characters with an opposing Alignment • When an adjacent opponent with an opposing Alignment attacks the character, he must make a Fortitude save or suffer 1d4 temporary Strength impairment and become <em> blinded </em>for 1d6 rounds.'
	} ));

	AddToLibrary( new Spell( { name : 'SCARE I',
	 level : '1',
	 school : 'Shadow',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : 'Instant',
	 savingThrow : 'Special <em>(see Effect)</em>',
	 effect : 'One character becomes <em> frightened </em>for 1d6 rounds. With a successful Will save, he becomes <em> shaken </em>instead.<br>This spell has no effect on undead.'
	} ));

	AddToLibrary( new Spell( { name : 'SCARE II',
	 level : '2',
	 school : 'Shadow',
	 distance : 'Local',
	 effect : 'As Scare I, except affecting up to 1 character per 3 Casting Levels.'
	} ));

	AddToLibrary( new Spell( { name : 'SCINTILLATING PATTERN',
	 level : '8',
	 school : 'Illusion',
	 castingTime : '1 half action',
	 distance : 'Close',
	 area : '20 ft. penetrating sphere',
	 duration : 'Concentration + 1d6 rounds',
	 savingThrow : 'Will negates (disbelief)',
	 effect : 'An oddly compelling pattern of colored lights floods the Area, drawing the attention of those within. Characters in the Area who can see must make a Will save or fall unconscious (if Career or Threat Level 6 or lower), become <em> stunned </em>(if Career or Threat Level 7–12), or become <em> baffled </em>(if Career or Threat Level 13+). This effect lasts 1d6 rounds.'
	} ));

	AddToLibrary( new Spell( { name : 'SCORCHING RAY',
	 level : '2',
	 school : 'Energy (Fire)',
	 castingTime : '1 half action',
	 distance : 'Short range attack',
	 duration : 'Instant',
	 effect : 'You fire 3 rays at targets you can see, each inflicting 1d4 fire damage (AP 5) per 2 Casting Levels (maximum 6d4).'
	} ));

	AddToLibrary( new Spell( { name : 'SCRYE I',
	 level : '1',
	 school : 'Divination',
	 castingTime : '10 minutes',
	 distance : 'Remote',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'You project your vision and hearing to 1 fixed, familiar location. While projecting, you cannot see and hear from your body.'
	} ));

	AddToLibrary( new Spell({ name : 'SCRYE II',
	 level : '3',
	 school : 'Divination',
	 distance : 'Personal',
	 effect : 'As Scrye I, except that you may alternately project your vision and hearing through a 1 in. diameter invisible sensor that appears next to you. While projecting you may move the sensor with a flying Speed of 30 ft. (otherwise it hovers in place).'
	} ));

	AddToLibrary( new Spell({ name : 'SCRYE III',
	 level : '5',
	 school : 'Divination',
	 castingTime : '10 minutes',
	 distance : 'Remote or Personal',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'You project your vision and hearing to 1 fixed, familiar location. You may alternately project your vision and hearing through a 1 in. diameter invisible sensor that appears next to you. While projecting you may move the sensor with a flying Speed of 30 ft. (otherwise it hovers in place). While projecting, you cannot see and hear from your body. While projecting you may also cast spells up to Level 3 as if you’re located at your point of view.'
	} ));

	AddToLibrary( new Spell( { name : 'SCRYE IV',
	 level : '7',
	 school : 'Divination',
	 savingThrow : 'Will negates',
	 effect : 'As Scrye I, except you may alternately project your vision and hearing through 1 character you can see (or 1 character you know if you have a personal effect belonging to them).'
	} ));

	AddToLibrary( new Spell( { name : 'SCRYE V',
	 level : '9',
	 school : 'Divination',
	 effect : 'As Scrye II or IV (your choice), except that while projecting you may also cast spells up to Level 8 as if you’re located at your point of view.'
	} ));

	AddToLibrary( new Spell( { name : 'SEARING RAY',
	 level : '3',
	 school : 'Energy (Light)',
	 castingTime : '1 half action',
	 distance : 'Medium range attack',
	 duration : 'Instant',
	 effect : 'Light emits from your open palm, inflicting 1d8 lethal damage per 2 Casting Levels (maximum 8d8). This attack ignores dodge bonuses to Defense and has AP 10.'
	} ));

	AddToLibrary( new Spell( { name : 'SEE INVISIBLE',
	 level : '3',
	 school : 'Divination',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : '10 min. per Casting Level (dismissible, enduring)',
	 effect : 'You clearly see <em> invisible </em>characters and objects as translucent shapes.'
	} ));

	AddToLibrary( new Spell( { name : 'SHADOW WALK',
	 level : '7',
	 school : 'Shadow (Darkness)',
	 castingTime : '1 half action',
	 distance : 'Personal or Touch',
	 duration : '1 hour per Casting Level (dismissible)',
	 savingThrow : 'Will negates',
	 effect : 'You and a number of allies up to your Casting Level may step partially into any available shadow within your line of sight and move in a single direction or toward a specific location at 50 MPH. Your course must take you through shadows that are touching or separated by no more than 10 ft. of faint or dim ambient light.<br>It’s difficult to perceive details from the material world while traveling through shadows and there’s no guarantee you’ll arrive where you want; unless you succeed with a Survival check (DC 15 with a synergy bonus from Spellcasting), you wind up a number of miles equal to the difference in a random direction, per the Deviation Rules<em>(see page 214)</em>.<br>Upon arrival, you rise through the nearest available shadow. Should a shadow be eliminated while you’re moving through it, you’re ejected through the nearest remaining shadow.',
	 aux: makeSkillRollLink('survival', 15)
	 } ));

	AddToLibrary( new Spell( { name : 'SHAPE CHANGE I',
	 level : '2',
	 school : 'Shapeshifting',
	 castingTime : '1 round',
	 distance : 'personal',
	 duration : '1 hour per casting level (dismissible, enduring)',
	 effect : 'You transform yourself into a creature with a threat level equal to your career level and with a maximum XP value of 40. You become a creature of that type in all respects save the following: you maintain your own Intelligence, Wisdom, and Charisma scores; you retain your own personality and memories; you do not acquire the skills (including spell casting skill) of the new form; you retain your own skills (including spell casting skill) but can only use them if the new form is physically able to do so (most animals canʼt speak, and so canʼt cast spells).'
	} ));

	AddToLibrary( new Spell( { name : 'SHAPE CHANGE II',
	 level : '4',
	 school : 'Shapeshifting',
	 castingTime : '1 round',
	 distance : 'personal',
	 duration : '1 hour per casting level (dismissible, enduring)',
	 effect : 'You transform yourself into a creature with a threat level equal to your career level and with a maximum XP value of 60. You become a creature of that type in all respects save the following: you maintain your own Intelligence, Wisdom, and Charisma scores; you retain your own personality and memories; you do not acquire the skills (including spell casting skill) of the new form; you retain your own skills (including spell casting skill) but can only use them if the new form is physically able to do so (most animals canʼt speak, and so canʼt cast spells).'
	} ));

	AddToLibrary( new Spell( { name : 'SHAPE CHANGE III',
	 level : '6',
	 school : 'Shapeshifting',
	 effect : 'As Shape Change I except you become a creature with a maximum XP value of 80.'
	} ));

	AddToLibrary( new Spell( { name : 'SHAPE CHANGE IV',
	 level : '4',
	 school : 'Shapeshifting',
	 effect : 'As Shape Change I except you become a creature with a maximum XP value of 100.'
	} ));

	AddToLibrary( new Spell( { name : 'SHAPE STONE',
	 level : '3',
	 school : 'Conversion (Earth)',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : 'Instant',
	 effect : 'You reshape an existing piece of stone up to 10 cubic ft. + 1 cubic ft. per Casting Level. While you can make crude coffers, doors, and the like, fine detail and moving parts aren’t possible.'
	} ));

	AddToLibrary( new Spell( { name : 'SHATTER',
	 level : '1',
	 school : 'Energy (Sonic)',
	 castingTime : '1 half action',
	 distance : 'Close',
	 area : '1 square',
	 duration : 'Instant',
	 savingThrow : 'Reflex negates (damage)',
	 effect : 'All characters and objects in the Area up to 1 lb. made of crystal, glass, ceramic, porcelain, or a similar substance are destroyed. Each heavier character and object of the same composition suffers 1d6 sonic damage per 2 Casting Levels (maximum 4d6).'
	} ));

	AddToLibrary( new Spell( { name : 'SHIELD',
	 level : '1',
	 school : 'Force',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'An invisible, mobile disk of force hovers in front of you, granting you 1/2 personal cover and negating Magic Missiles cast at you.'
	} ));

	AddToLibrary( new Spell( { name : 'SHIELD OTHER',
	 level : '2',
	 school : 'Glory',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : '1 hour per Casting Level (dismissible)',
	 prepCost : '1',
	 effect : 'One character gains a +1 magic bonus to Defense and saves, and suffers only 1/2 incoming damage (rounded down). The remainder is transferred to you, ignoring DR and Resistances.<br>This spell ends if the character moves more than 50 ft. from you.'
	} ));

	AddToLibrary( new Spell( { name : 'SILENCE',
	 level : '2',
	 school : 'Secrets (Silence)',
	 castingTime : '1 half action',
	 distance : 'Remote',
	 area : '20 ft. penetrating sphere',
	 duration : '1 minute per Casting Level (dismissible)',
	 savingThrow : 'Will negates',
	 effect : 'Complete silence prevails in the Area. Sounds aren’t heard, whether they originate within or outside, or simply pass through. This effect is stationary when cast on a location or moves with a character.'
	} ));

	AddToLibrary( new Spell( { name : 'SLEEP I',
	 level : '1',
	 school : 'Charm',
	 castingTime : '1 round',
	 distance : 'Close',
	 area : '10 ft. penetrating sphere',
	 duration : '1 round per Casting Level',
	 savingThrow : 'Will negates (repeatable, terminal)',
	 effect : 'Characters in the Area fall asleep.'
	} ));

	AddToLibrary( new Spell( { name : 'SLEEP II',
	 level : '3',
	 school : 'Charm',
	 area : '20 ft. penetrating sphere',
	 effect : 'As Sleep I, except as noted.'
	} ));

	AddToLibrary( new Spell( { name : 'SLOW',
	 level : '3',
	 school : 'Compass',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : '1 round per Casting Level',
	 savingThrow : 'Fortitude negates',
	 effect : 'One character is<em> slowed</em>. This spell counters Haste.'
	} ));

	AddToLibrary( new Spell( { name : 'SPEAK WITH THE DEAD',
	 level : '3',
	 school : 'Necromancy',
	 castingTime : '10 minutes',
	 distance : 'Close',
	 duration : '1 minute per Casting Level',
	 savingThrow : 'Will negates',
	 effect : 'You grant a semblance of life and intellect to a corpse with an intact head and may ask it up to 1 question per 2 Casting Levels. Unless the corpse’s Alignment was the same as yours, it may make a Will save to resist your questions, remaining silent.  The corpse only knows what it knew during life, including the languages it spoke (if any), and can’t converse outside these specific questions. Answers are usually brief, cryptic, or repetitive. You may only cast this spell once on each corpse.'
	} ));

	AddToLibrary( new Spell( { name : 'SPELL IMMUNITY I',
	 level : '4',
	 school : 'Warding',
	 castingTime : '1 full action',
	 distance : 'Personal or Touch',
	 duration : '10 minutes per Casting Level',
	 effect : 'One character gains Spell Defense 50 against 1 specific spell per 4 Casting Levels you have. Each spell must be Level 4 or lower.  Each character can only be the target of a single Spell Immunity spell at a time.'
	} ));

	AddToLibrary( new Spell( { name : 'SPELL IMMUNITY II',
	 level : '8',
	 school : 'Warding',
	 effect : 'As Spell Immunity I, except chosen spells may be up to Level 8.'
	} ));

	AddToLibrary( new Spell( { name : 'STATUS',
	 level : '2',
	 school : 'Divination',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : '1 hour per Casting Level',
	 savingThrow : 'Will negates (harmless)',
	 effect : 'You remain mentally aware of one character’s relative position, damage, and conditions.'
	} ));

	AddToLibrary( new Spell( { name : 'STATUS, MASS',
	 level : '6',
	 school : 'Divination',
	 effect : 'As Status, except targeting a number of characters up to your Casting Level.'
	} ));

	AddToLibrary( new Spell( { name : 'SUNLIGHT I',
	 level : '7',
	 school : 'Energy (Light)',
	 castingTime : '1 half action',
	 distance : 'Short range attack',
	 duration : 'Instant',
	 savingThrow : 'Reflex half (damage), Reflex negates (condition)',
	 effect : 'You fire dazzling beams of intense light at 5 targets you can see. Each beam inflicts 4d6 lethal damage (doubled against undead) and forces a Reflex save to avoid becoming <em> blinded </em>for 1d6 rounds (undead automatically fail this save).'
	} ));

	AddToLibrary( new Spell( { name : 'SUNLIGHT II',
	 level : '8',
	 school : 'Energy (Light)',
	 distance : 'Long',
	 area : '80 ft. sphere',
	 effect : 'As Sunlight I, inflicting 1d6 lethal damage per Casting Level (maximum 18d6).'
	} ));

	AddToLibrary( new Spell( { name : 'TELEPATHY',
	 level : '1',
	 school : 'Divination',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : 'Concentration + 1 min/casting level (dismissible)',
	 effect : 'You may converse telepathically with any willing creature in the area of effect.'
	} ));

	AddToLibrary( new Spell( { name : 'TELEPORT I',
	 level : '5',
	 school : 'Compass',
	 castingTime : '1 half action',
	 distance : 'Personal or Touch',
	 duration : 'Instant',
	 effect : 'You and one additional willing character per 3 Casting Levels are transported up to 100 miles per Casting Level. You must have visited the destination before and characters may not be overloaded. All characters must be in physical contact with each other and at least 1 of them must be in physical contact with you.<br>Teleportation is not an exact science; unless you succeed with a Survival check (DC 20 with a synergy bonus from Spellcasting), you wind up a number of miles equal to the difference in a random direction, per the Deviation rules<em>(see, page 214)</em>.'
	} ));

	AddToLibrary( new Spell( { name : 'TELEPORT II',
	 level : '7',
	 school : 'Compass',
	 effect : 'As Teleport I, except you may transport yourself and companions across any distance. You need not have visited the destination before but you must have a reliable description of it. Also, the Survival check DC drops to 15.'
	} ));

	AddToLibrary( new Spell( { name : 'TIME STOP',
	 level : '9',
	 school : 'Compass',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : 'Instant',
	 prepCost : '10',
	 effect : 'Time speeds up for you, making it appear that others are frozen around you. You are free to act for 1d6 rounds of your time, though you can’t target other characters with attacks or spells, nor may you move or harm them or anything they carry. Harmful spells that last after Time Stop ends affect others as normal. Fire, heat, cold, gas, and other persistent sources of damage affect you during each of your rounds as normal.'
	} ));

	AddToLibrary( new Spell( { name : 'TINKER I',
	 level : '1',
	 school : 'Artifice',
	 castingTime : '1 half action',
	 distance : 'Touch',
	 duration : 'Instant',
	 effect : 'You repair a broken object weighing up to 1 lb.<br>Alternately, you manipulate the inner workings of a construct, repairing or inflicting 1d8 damage + 1 per Casting Level (maximum +5).'
	} ));

	AddToLibrary( new Spell( { name : 'TINKER II',
	 level : '2',
	 school : 'Artifice',
	 effect : 'You repair a broken object weighing up to 1 lb. per Casting Level or 1 destroyed object weighing up to 1 lb.<br>Alternately, you repair or inflict 2d8 damage + 1 per Casting Level (maximum +10).'
	} ));

	AddToLibrary( new Spell( { name : 'TINY SHELTER',
	 level : '3',
	 school : 'Force',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 area : '20 ft. sphere',
	 duration : '2 hours per Casting Level (dismissible)',
	 effect : 'An opaque sphere of force appears around you, protecting against Nature’s Fury Complications up to 3 dice (a 4- die Nature’s Fury Complication immediately destroys it). The hut’s exterior is a simple dome of any color you choose but its interior walls are transparent, allowing occupants to see outside. Its interior is always 70° F and provides dim light at your command.<br>The spell ends if you leave the shelter.'
	} ));

	AddToLibrary( new Spell( { name : 'TONGUES I',
	 level : '3',
	 school : 'Word',
	 castingTime : '1 full action',
	 distance : 'Personal or Touch',
	 duration : '10 minutes per Casting Level (enduring)',
	 effect : 'The target may speak, understand, read, and write 1 language of your choice except arcane script<em>(see pages 61 and 142)</em>. He must still decipher any codes present.'
	} ));

	AddToLibrary( new Spell( { name : 'TONGUES II',
	 level : '6',
	 school : 'Word',
	 castingTime : '1 full action',
	 distance : 'Personal or Touch',
	 duration : '10 minutes per Casting Level',
	 effect : 'The target may speak, understand, read, and write all languages except arcane script<em>(see pages 61 and 142)</em>. He must still decipher any codes present.'
	} ));

	AddToLibrary( new Spell( { name : 'TOUCH OF LIGHT',
	 level : '0',
	 school : 'Healing (Light)',
	 castingTime : '1 full action',
	 distance : 'Personal or Touch',
	 duration : 'Instant',
	 savingThrow : 'Will negates (undead damage)',
	 effect : 'One standard character heals 1 damage or one special character heals 1 vitality.'
	} ));

	AddToLibrary( new Spell( { name : 'TREE WALK',
	 level : '6',
	 school : 'Nature',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : '1 hour per Casting Level',
	 effect : 'You can enter a tree and, as a full action, shift inside any other living tree of the same type within 1 mile (you automatically sense all other trees of the same type within that distance). Exiting also takes 1 full action, even if you’re forced out when the spell ends. Should you remain in a tree until it’s cut or burned down, you perish as well.'
	} ));

	AddToLibrary( new Spell( { name : 'TRUE SEEING',
	 level : '5',
	 school : 'Divination',
	 castingTime : '1 half action',
	 distance : 'Personal or Touch',
	 duration : '1 minute per Casting Level',
	 savingThrow : 'Will negates (harmless)',
	 prepCost : '2',
	 effect : 'The target sees through illusions, darkness, invisibility, concealment, and other visual effects created by spells and magic items.'
	} ));

	AddToLibrary( new Spell( { name : 'TRUE STRIKE I',
	 level : '1',
	 school : 'Divination',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 duration : 'Special <em>(see Effect)</em>',
	 effect : 'The defenses of those around you are laid bare. If your next attack check is made before the end of the next round, you gain a +6 magic bonus and your error range decreases by 2 (minimum 0).'
	} ));

	AddToLibrary( new Spell( { name : 'TRUE STRIKE II',
	 level : '4',
	 school : 'Divination',
	 effect : 'As True Strike I, except the bonus is +10 and you cannot suffer an error.'
	} ));

	AddToLibrary( new Spell( { name : 'UNSEEN SERVANT',
	 level : '1',
	 school : 'Force',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : '1 hour per Casting Level',
	 effect : 'An invisible, mindless, shapeless force appears next to you, ready to perform simple tasks at your command.<br>It has a Strength score of 5, a Ground Speed of 15 ft., and may exert 20 lbs. of force.<br>It can perform physical skill checks with a DC up to 15 and similar menial labors<br>(fetching things, opening doors and containers, holding chairs, cleaning, mending, etc.).<br>It cannot attack or make saving throws, nor can it perform any action that requires<br>an attack check or saving throw. It may only perform 1 action at a time.<br>The servant disappears if it suffers 6 or more points of damage.'
	} ));

	AddToLibrary( new Spell( { name : 'VERDURE',
	 level : '3',
	 school : 'Nature',
	 castingTime : '1 full action',
	 distance : 'Special <em>(see Effect)</em>',
	 area : 'Special <em>(see Effect)</em>',
	 duration : 'Instant',
	 effect : 'One effect occurs in an area with at least marginal vegetation (your choice).<ul><li><em>Enrich: </em>Plants of your choice within half a mile grow twice as fast and crops of your choice within the same distance produce double the normal yield. This effect lasts 1 year.</li><li><em>Inhibit: </em>Plants of your choice within half a mile grow half as fast and crops of your choice within the same distance produce half the normal yield. This effect lasts 1 year.</li><li><em>Prune: </em>Plants of your choice within 1,000 ft. shrink and/or vanish, forming settled terrain.</li><li><em>Thicken:</em> Plants of your choice within 1,000 ft. become thick and overgrown, forming jungle terrain. Within this area Speed drops to 5 ft. for characters up to Medium Size and to 10 ft. for larger characters.</li></ul>This spell has no effect on plant characters and may counter itself.'
	} ));

	AddToLibrary( new Spell( { name : 'WALL OF COUNTER MAGIC',
	 level : '5',
	 school : 'Warding',
	 castingTime : '1 full action',
	 distance : 'Local',
	 area : '20 ft. long per Casting Level wall, 20 ft. tall, 1 ft. thick',
	 duration : 'Concentration + 1 round per Casting Level (dismissible, enduring)',
	 effect : 'An invisible curtain springs into existence, countering spell effects that pass through it with a Casting Level + Spell Level equal to or less than your Casting Level + 5. Some effects may not be countered, as noted in their descriptions. The curtain is immune to damage but may be countered.'
	} ));

	AddToLibrary( new Spell( { name : 'WALL OF FIRE',
	 level : '4',
	 school : 'Energy (Fire)',
	 castingTime : '1 full action',
	 distance : 'Local',
	 area : '20 ft. long per Casting Level wall, 20 ft. tall, 1 ft. thick',
	 duration : 'Concentration + 1 round per Casting Level (dismissible, enduring)',
	 savingThrow : 'Reflex half',
	 effect : 'A curtain of fire springs into existence, inflicting a –2 penalty with Notice and Search checks made through the flames.<br>Each character and object in or moving through the curtain suffers 2d6 fire damage +1 per Casting Level (maximum +10). If 20 points of its fire damage are extinguished, a single-square hole is punched through, reforming in 10 minutes.'
	} ));

	AddToLibrary( new Spell( { name : 'WALL OF ICE',
	 level : '4',
	 school : 'Weather (Ice)',
	 castingTime : '1 full action',
	 distance : 'Local',
	 area : '20 ft. long per Casting Level wall, 20 ft. tall, 1 ft. thick',
	 duration : 'Concentration + 1 round per Casting Level (dismissible, enduring)',
	 savingThrow : 'Reflex partial (new position)',
	 effect : 'A curtain of ice springs into existence, pushing characters and objects into adjacent squares (with a successful Reflex save, a character may wind up on the side of his choice; otherwise, you choose his new location). The curtain provides total cover and inflicts a –6 penalty with Notice and Search checks made through the ice. If it suffers 20 damage a singlesquare hole is punched through, reforming in 10 minutes.'
	} ));

	AddToLibrary( new Spell( { name : 'WALL OF STONE',
	 level : '5',
	 school : 'Creation (Earth)',
	 castingTime : '1 half action',
	 distance : 'Local',
	 area : '20 ft. long per Casting Level wall, 20 ft. tall, 1 ft. thick',
	 duration : 'Concentration + 1 round per Casting Level (dismissible, enduring)',
	 savingThrow : 'Reflex partial (new position)',
	 effect : 'A curtain of rock rises from the ground, pushing characters and objects into adjacent squares (with a successful Reflex save, a character may wind up on top or on the side of his choice; otherwise, you choose his new location). The curtain can be crudely shaped to produce crenellations along its upper edge, granting 1/4 cover to any kneeling behind. Characters cannot be attacked through the curtain. It has DR 5 and if it suffers 20 damage a single-square hole is punched through, reforming in 10 minutes.'
	} ));

	AddToLibrary( new Spell( { name : 'WALL OF WIND',
	 level : '3',
	 school : 'Weather (Air)',
	 castingTime : '1 full action',
	 distance : 'Local',
	 area : '20 ft. long per Casting Level wall, 20 ft. tall, 1 ft. thick',
	 duration : 'Concentration + 1 round per Casting Level (dismissible, enduring)',
	 effect : 'A curtain of wind springs into existence, flinging each character and unanchored object up to Medium Size 1d6 squares in a random direction and inflicting 2d6 falling damage + 1 per Casting Level, maximum +8 (with a successful Acrobatics check vs. double the spell save DC, a character may choose his direction and decrease the distance and damage by 1/2, rounded down). This check is also required to pass through or linger inside the curtain. Arrows, bolts, hurled weapons, and gases cannot pass through the curtain.'
	} ));

	AddToLibrary( new Spell( { name : 'WAR CRY',
	 level : '8',
	 school : 'Energy (Sonic)',
	 castingTime : '1 half action',
	 distance : 'Personal',
	 area : '100 ft. + 10 ft. per Casting Level cone',
	 duration : 'Instant (damage), 1 minute per Casting Level (bonus)',
	 savingThrow : 'Fortitude half (damage)',
	 effect : 'Your fearsome battle shout inflicts 1d8 sonic damage per 2 Casting Levels to each opponent in the Area. Each hero who hears it gains a +1 morale bonus with attack checks and Will saves, and recovers lost vitality points equal to his Career or Threat Level.'
	} ));

	AddToLibrary( new Spell( { name : 'WATER BREATHING',
	 level : '3',
	 school : 'Shapeshifting (Water)',
	 castingTime : '1 half action',
	 distance : 'Personal or Touch',
	 duration : 'Special <em>(see Effect)</em>',
	 effect : 'Up to 10 characters can breathe water and air interchangeably. This spell’s Duration is (2 hours per Casting Level) divided by the number of characters targeted (e.g. if your Casting Level is 10 and you target 5 characters, the spell’s Duration is 4 hours).'
	} ));

	AddToLibrary( new Spell( { name : 'WATER WALK',
	 level : '0',
	 school : 'Compass (Water)',
	 castingTime : '1 half action',
	 distance : 'Personal or Touch',
	 duration : '1 minute per Casting Level',
	 effect : 'One character can tread on fluid as if walking on solid ground. If the character submerges for any reason, he rises 60 ft. per round until standing on the surface.'
	} ));

	AddToLibrary( new Spell( { name : 'WATER WALK, MASS',
	 level : '2',
	 school : 'Compass (Water)',
	 castingTime : '1 half action',
	 distance : 'Close',
	 duration : '1 minute per Casting Level',
	 Effect: 'As Water Walk, except you may target a number of characters equal to your Casting Level.'
	} ));

	AddToLibrary( new Spell( { name : 'WHISPERS',
	 level : '0',
	 school : 'Word (Sonic)',
	 castingTime : '1 free action',
	 distance : 'Local',
	 duration : '1 minute',
	 effect : 'Your conversation with up to one character per Casting Level becomes a series of faint whispers, inaudible to others. All characters in the conversation must be within the spell’s Distance and sound must be able to travel between them, though they needn’t see each other.'
	} ));

	AddToLibrary( new Spell( { name : 'WILD SIDE I',
	 level : '2',
	 school : 'Shapeshifting',
	 castingTime : '1 free action',
	 distance : 'Personal or Touch',
	 duration : '1 minute per Casting Level',
	 effect : 'One willing character gains bestial features and your choice of a Bite I, Claw I, Gore I, Tail Slap I, Talon I, or Trample I natural attack.'
	} ));

	AddToLibrary( new Spell( { name : 'WILD SIDE II',
	 level : '5',
	 school : 'Shapeshifting',
	 effect : 'As Wild Side I, except the natural attack is Grade III.'
	} ));

	AddToLibrary( new Spell( { name : 'WILD SIDE III',
	 level : '8',
	 school : 'Shapeshifting',
	 effect : 'As Wild Side I, except the natural attack is Grade V.'
	} ));

	AddToLibrary( new Spell( { name : 'WINTER’S DOMAIN I',
	 level : '1',
	 school : 'Weather (Ice)',
	 castingTime : '1 full action',
	 distance : 'Personal',
	 area : '20 ft. sphere',
	 duration : 'Concentration + 1 round per Casting Level (dismissible)',
	 effect : 'All Fire effects with a Casting Level + Spell Level equal to or less than your Casting Level + 1 are suppressed.'
	} ));

	AddToLibrary( new Spell( { name : 'WINTER’S DOMAIN II',
	 level : '5',
	 school : 'Weather (Ice)',
	 castingTime : '1 free action',
	 effect : 'As Winter’s Domain I, except suppressing Fire effects with a Casting Level + Spell Level equal to or less than your Casting Level + 5.'
	} ));

	AddToLibrary( new Spell( { name : 'WISH III',
	 level : '9',
	 school : 'Word',
	 effect : 'As Wish I, except with these common effects.<br>• Cast a single spell up to Level 9 (the wisher paying its Preparation Cost, if any)<br>• Create an item costing up to 50,000s or 50 Reputation, or upgrade an existing item at up to half that amount<br>• Undo the effect of a single spell up to Level 9 or a single action of any character up to Level 18<br>• Undo a single event that occurred in the current adventure'
	} ));

	AddToLibrary( new Spell( { name : 'WIT I',
	 level : '2',
	 school : 'Blessing',
	 castingTime : '1 full action',
	 distance : 'Personal or Touch',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'The character gains a +3 magic bonus to your choice of Intelligence, Wisdom, or Charisma.'
	} ));

	AddToLibrary( new Spell( { name : 'WIT II',
	 level : '4',
	 school : 'Blessing',
	 castingTime : '1 full action',
	 distance : 'Personal or Touch',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'The character gains a +5 magic bonus to your choice of Intelligence, Wisdom, or Charisma.'
	} ));

	AddToLibrary( new Spell( { name : 'WIT III',
	 level : '6',
	 school : 'Blessing',
	 castingTime : '1 full action',
	 distance : 'Personal or Touch',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'The character gains a +7 magic bonus to your choice of Intelligence, Wisdom, or Charisma.'
	} ));

	AddToLibrary( new Spell( { name : 'WIT IV',
	 level : '8',
	 school : 'Blessing',
	 castingTime : '1 full action',
	 distance : 'Personal or Touch',
	 duration : '1 minute per Casting Level (dismissible)',
	 effect : 'The character gains a +9 magic bonus to your choice of Intelligence, Wisdom, or Charisma.'
	} ));

	AddToLibrary( new Spell( { name : 'WIT I, MASS',
	 level : '5',
	 school : 'Blessing',
	 area : '50 ft. sphere',
	 effect : 'As Wit I, except that it affects a number of characters in the Area up to your Casting Level.'
	} ));

	AddToLibrary( new Spell( { name : 'WISH I',
	 level : '3',
	 school : 'Word',
	 castingTime : '1 full action',
	 effect : 'Your desire is made reality — one carefully phrased wish is fulfilled to the best of the Game Master’s ability. Take heed, however! Even wishes have their limits. Your wish must be grammatically correct and may invoke no more than 1 effect. Also, poorly phrased wishes can go awry, producing unexpected results. The GM is the ultimate arbiter of what wishes can achieve and what specific wishes yield, though some common Wish I effects follow.<br>• Cast a single spell up to Level 3 (the wisher paying its Preparation Cost, if any)<br>• Create an item costing up to 10,000s or 10 Reputation, or upgrade an existing item at up to half that amount<br>• Undo the effect of a single spell up to Level 3 or a single action of any character up to Level 6<br>• Undo a single event that occurred in the last minute<br>Wishes are among the most powerful magic in all creation and should only be introduced with great care. For every wish you desire, you must first complete a Quest Subplot customized to the nature of wishes in the campaign world and story<em>(see page 383)</em>. This spell cannot be countered.'
	} ));

	AddToLibrary( new Spell( { name : 'WISH II',
	 level : '6',
	 school : 'Word',
	 effect : 'As Wish I, except with these common effects.<br>• Cast a single spell up to Level 6 (the wisher paying its Preparation Cost, if any)<br>• Create an item costing up to 25,000s or 25 Reputation, or upgrade an existing item at up to half that amount (rounded up)<br>• Undo the effect of a single spell up to Level 6 or a single action of any character up to Level 12<br>• Undo a single event that occurred in the current scene  '
	} ));

	AddToLibrary( new Spell( { name : 'ZONE OF TRUTH',
	 level : '3',
	 school : 'Charm',
	 castingTime : '1 half action',
	 distance : 'Close',
	 area : '20 ft. penetrating sphere',
	 duration : '1 minute per Casting Level',
	 savingThrow : 'Will negates (repeatable)',
	 effect : 'All characters in the Area find it difficult to deliberately lie, suffering a penalty with Bluff checks equal to your Casting Level + 3.'
	} ));
}; // With
}
