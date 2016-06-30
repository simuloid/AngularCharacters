function defineSkillFunctionality(context) {
	context.Skill = function(bundle)
	{
		this.name = bundle.name;
		this.isOrigin = bundle.isOrigin === undefined ? false : bundle.isOrigin;
		this.ranks = bundle.ranks === undefined ? 0 : parseInt(bundle.ranks, 10);
		this.misc = bundle.misc === undefined ? 0 : parseInt(bundle.misc, 10);
		this.attr_name = this.attrByName[this.name];
		this.attr_mod = context.data[this.attr_name + '_mod'];
		this.threat = bundle.threat === undefined ? 20 : parseInt(bundle.threat, 10);
		this.notes = bundle.notes === undefined ? '' : bundle.notes;
		this.total = this.ranks + this.misc + this.attr_mod();
		this.curTotal = function() {
			return this.ranks + this.misc + this.attr_mod();
		};
	}

	with (context) {
		Skill.prototype.skillNames = [
			'acrobatics', 'athletics', 'blend', 'bluff', 'crafting', 'disguise', 
			'haggle', 'impress', 'intimidate', 'investigate', 'knowledge', 'medicine', 
			'notice', 'prestidigitation', 'resolve', 'ride', 'search', 'sense motive', 
			'sneak', 'spellcasting', 'survival', 'tactics' ];

		Skill.prototype.attrByName = {};
		Skill.prototype.attrByName['acrobatics'] = 'dex';
		Skill.prototype.attrByName['athletics'] = 'str';
		Skill.prototype.attrByName['blend'] = 'cha';
		Skill.prototype.attrByName['bluff'] = 'cha';
		Skill.prototype.attrByName['crafting'] = 'int';
		Skill.prototype.attrByName['disguise'] = 'cha';
		Skill.prototype.attrByName['haggle'] = 'wis';
		Skill.prototype.attrByName['impress'] = 'cha';
		Skill.prototype.attrByName['intimidate'] = 'wis';
		Skill.prototype.attrByName['investigate'] = 'wis';
		Skill.prototype.attrByName['knowledge'] = 'int';
		Skill.prototype.attrByName['medicine'] = 'int';
		Skill.prototype.attrByName['notice'] = 'wis';
		Skill.prototype.attrByName['prestidigitation'] = 'dex';
		Skill.prototype.attrByName['resolve'] = 'con';
		Skill.prototype.attrByName['ride'] = 'dex';
		Skill.prototype.attrByName['search'] = 'int';
		Skill.prototype.attrByName['sense motive'] = 'wis';
		Skill.prototype.attrByName['sneak'] = 'dex';
		Skill.prototype.attrByName['spellcasting'] = 'int';
		Skill.prototype.attrByName['survival'] = 'wis';
		Skill.prototype.attrByName['tactics'] = 'int';
	};
}