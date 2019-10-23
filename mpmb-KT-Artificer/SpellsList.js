/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.
	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Spell
	Effect:		This is the syntax for adding a new spell
	Sheet:		v12.999 (2018-02-19)
	If you are looking for a way to add a cantrip/spell to the drop-down boxes in the attack sections, then you will have to look at the WeaponsList syntax and add the cantrip/spell as a weapon (as well)
*/

var iFileName = "KibblesTasty - SpellsList.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned
// The source (EN5ider 108)
SourceList["KibblesTasty"] = {
	name : "KibblesTasty Revised artificer v2.0.1",
	abbreviation : "KT:RA",
	group : "KibblesTasty",
	url : "https://www.gmbinder.com/share/-LAEn6ZdC6lYUKhQ67Qk",
	date : "2019/10/21"
};

SpellsList["arcane ablation"] = { //Object name; note the use of only lower case! The spelling here is used to identify the spell with and has to be exactly the same as "name" but in lower case. Also note the absence of the word "var" and the use of brackets []
	name : "Arcane Ablation", //Required; The name of the spell. This will be put in the Spell field on the Spell Sheet. Except, if a "nameShort" is present, this name will be put in the mouseover text (tooltip) of the Spell field on the Spell Sheet.
	nameShort : "Arcane Ablation", //Optional; A shortened name of the spell that fits on the Spell Sheet. If present, this name will be put on the Spell Sheet and the full name above will be put in the mouseover text (tooltip) of the Spell field on the Spell Sheet.
	 // Optional; Array of all the classes that have this spell on their list. Even with one entry you still need to put the brackets around it [].
	 // Note the use of only lower case as these entries are identical to the ClassList object names! If you omit this attribute, the spell will only be selectable through the dependencies, see below.
	 // If you want the spell to be available for subclasses and through the SpellcastingBonus object, just add an empty array, i.e. classes : [],
	classes : ["artificer"],
	 // Required; the source and the page number. "HB" stands for homebrew. 
	 // Note that filling out this incorrectly will prohibit the spell from showing up in the spell selection dialogues. 
	 // If you want to add a custom source, see "Homebrew Syntax - SourceList.js" 
	 // This can be an array of arrays to indicate the things appears in multiple sources. 
	 // For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]
	source : ["HKT:RA", 0],
	// Required; The Spell Level. Has to be a number from 0 to 9 //
	// use 1 if you are adding a psionic discipline, and 0 for a psionic talent
	level : 1, 
	// Optional; Spell School as it will show up on the Spell Sheet; 
	// Can only select from: "Abjur", "Conj", "Div", "Ench", "Evoc", "Illus", "Necro", "Trans", and for psionic discipline orders: "Avatar", "Awake", "Immor", "Nomad", "Wu Jen"
	school : "Trans", 
	//Required; Casting Time as it will show up on the Spell Sheet
	time : "1 action", 
	//Required; Spell Range as it will show up on the Spell Sheet
	range : "Touch", 
    // Optional; Components as they will show up on the Spell Sheet; Use "M\u0192" for a material component that is costly (Mƒ), and use "M\u2020" for a material component that is costly and also consumed (M†)
	components : "V,S", 
    //Required; Spell Duration as it will show up on the Spell Sheet
	duration : "1 Hour", 
	//Optional; The ability score that the spell's Saving Throw uses. This will be put in the save field

 	//Required; Short Spell Description as it will show up on the Spell Sheet
	description : "Repair a single broken object no larger than 1 cu ft; can't restore magic to broken magic item",
	//Optional; Short Spell Description as it will show up on the Spell Sheet when it is set to use the metric system. If this is omitted the sheet will automatically try to convert the 'description' to metric
	descriptionMetric : "Repair a single broken object no larger than 1 cu ft; can't restore magic to broken magic item", 
    //Optional; The full Spell Description. This string will be put in the mouseover text (tooltip) of the description field
	descriptionFull : "You touch a piece of worn armor or clothing and imbue it with magic. The creature wearing this the imbued item gains 4 temporary hit points for the duration. When these temporary hit points are exhausted, at the start of the creature's next turn it will gain 3 temporary hit points. This repeats when those temporary hit points are exhausted as the previous total minus one, until no temporary hit points would be gained and the spell ends." + "\n   " + "At Higher Levels: The initial temporary hit points increases by 1 for each slot level above 1st.", 
	ritual : false, //Optional; Whether (true) or not (false) this spell is a ritual
	psionic : false, //Optional; If you set this to true, the sheet will treat this spell as a psionic talent/discipline
    // Optional; Set something to be put in the first column on the spell sheet. This can be something like power point cost or ki cost,
    // but also the commands "atwill", "oncelr", "oncesr", "markedbox", "checkbox", or "checkedbox" for the appropriate icon
	dependencies : [], //Optional; An array of spells (SpellsList object names) that will be put in the rows below this spell when this spell is added to the spell sheet
};

SpellsList["arcane weapon"] = { 
	name : "Arcane Weapon", 
	nameShort : "Arcane Weapon", 
	classes : ["artificer"],
	source : ["HKT:RA", 0],
	level : 1, 
	school : "Trans", 
	time : "1 action", 
	range : "Touch", 
	components : "V,S", 
	duration : "Concentration, up to 1 hour", 
	description : "You touch a weapon and imbue it with magic. For the duration the weapon counts as a magical weapon, any damage dealt by it is Force damage.",
	descriptionMetric : "You touch a weapon and imbue it with magic. For the duration the weapon counts as a magical weapon, any damage dealt by it is Force damage.", 
	descriptionFull : "You touch a weapon and imbue it with magic. For the duration the weapon counts as a magical weapon, any damage dealt by it is Force damage.",
	ritual : false, //Optional; Whether (true) or not (false) this spell is a ritual
	dependencies : [], //Optional; An array of spells (SpellsList object names) that will be put in the rows below this spell when this spell is added to the spell sheet
};

SpellsList["bond item"] = { 
	name : "Bond Item", 
	nameShort : "Bond Item", 
	classes : ["artificer"],
	source : ["HKT:RA", 0],
	level : 1, 
	school : "Conj", 
	time : "1 Min", 
	range : "Touch", 
	components : "V,S", 
	duration : "8 Hours",
	save : "Cha",  
	description : "Touch an Item less than 100 lbs, until spell ends you can recall the item as a bonus action,Charisma save if some one is in possession of item.",
	descriptionMetric : "Touch an Item less than 100 lbs, until spell ends you can recall the item as a bonus action,Charisma save if some one is in possession of item.", 
	descriptionFull : "You touch a item weighing no more than 100 pounds and form a link between you and it. Until the spell ends, you can recall it to your hand as a bonus action."+"\n" + "If another creature is holding or wearing the item when you try to recall it, they make a Charisma saving throw, and if they succeed, the spell fails. They make this save with advantage if they have had possession of the item for more than 1 minute.",
	ritual : false, //Optional; Whether (true) or not (false) this spell is a ritual
	dependencies : [], //Optional; An array of spells (SpellsList object names) that will be put in the rows below this spell when this spell is added to the spell sheet
};
SpellsList["fall"] = { 
	name : "Fall", 
	nameShort : "Fall", 
	classes : ["artificer","sorcerer","wizard"],
	source : ["HKT:RA", 0],
	level : 1, 
	school : "Trans", 
	time : "1 action", 
	range : "Self", 
	components : "V,S", 
	duration : "Instantaneous", 
	description : "You fall in the direction you choose for 1 turn(500 feet) or until you hit an object. You do take falling damage as normal",
	descriptionMetric : "You fall in the direction you choose for 1 turn(500 feet) or until you hit an object. You do take falling damage as normal", 
	descriptionFull : "You alter gravity for yourself, causing you to reorient which way is down for you until the end of your turn. You can pick any direction to fall as if under the effect of gravity, falling up to 500 feet before the spell ends." +"\n" + "If you collide with something during this time, you take falling damage as normal, but you can control your fall as you could under normal conditions by holding onto objects or move along a surface according to your new orientation as normal until your turn ends and gravity returns to normal.",
	ritual : false, //Optional; Whether (true) or not (false) this spell is a ritual
	dependencies : [], //Optional; An array of spells (SpellsList object names) that will be put in the rows below this spell when this spell is added to the spell sheet
};
SpellsList["seeking projectile"] = { 
	name : "Seeking Projectile", 
	nameShort : "Seeking Projectile", 
	classes : ["artificer"],
	source : ["HKT:RA", 0],
	level : 1, 
	school : "Trans", 
	time : "1 action", 
	range : "Touch", 
	components : "V,S", 
	duration : "Concentration, up to 10 minutes", 
	description : "A piece of ammo or thrown weapon you touch, add your spellcasing modifier to the dice roll, if the new roll is over 20 is a crit. Spell ends after an attack is made with the projectile.",
	descriptionMetric : "A piece of ammo or thrown weapon you touch, add your spellcasing modifier to the dice roll, if the new roll is over 20 is a crit. Spell ends after an attack is made with the projectile", 
	descriptionFull : "You touch a piece of ammunition or weapon with the thrown property imbuing it with the property of seeking its target. When an ranged attack roll is made with that weapon, the attack roll can add your spell casting modifier to the value on the dice. If that makes the value on the die a 20 or more, the attack is a critical hit as if a 20 was rolled. After making the attack roll, the spell ends.",
	ritual : false, //Optional; Whether (true) or not (false) this spell is a ritual
	dependencies : [], //Optional; An array of spells (SpellsList object names) that will be put in the rows below this spell when this spell is added to the spell sheet
};
SpellsList["unburden"] = { 
	name : "Unburden", 
	nameShort : "Unburden", 
	classes : ["artificer"],
	source : ["HKT:RA", 0],
	level : 1, 
	school : "Trans", 
	time : "1 action", 
	range : "Touch", 
	components : "V,S", 
	duration : "1 hour", 
	description : "Target no longer affected by movement or stealth penalties from heavy armor, and can carry twice their normal weight before encumbrance.",
	descriptionMetric : "Target no longer affected by movement or stealth penalties from heavy armor, and can carry twice their normal weight before encumbrance.", 
	descriptionFull : "A creature you touch no longer suffers the penalties to movement speed or to their Dexterity (Stealth) checks while wearing heavy armor, and is no long encumbered from carry weight unless they are carrying more than twice the weight that would encumber them.",
	ritual : false, //Optional; Whether (true) or not (false) this spell is a ritual
	dependencies : [], //Optional; An array of spells (SpellsList object names) that will be put in the rows below this spell when this spell is added to the spell sheet
};


SpellsList["imbue luck"] = { 
	name : "Imbue Luck", 
	nameShort : "Imbue Luck", 
	classes : ["artificer"],
	source : ["HKT:RA", 0],
	level : 2, 
	school : "Abjur", 
	time : "1 action", 
	range : "Touch", 
	components : "V,S", 
	duration : "1 hour", 
	description : "A weapon or worn item is imbued with luck.If it is a weapon, the user can roll a second attack dice and choose which to use. If it is an item, the user can roll a second dice when hit and choose which dice the attack used.",
	descriptionMetric : "A weapon or worn item is imbued with luck.If it is a weapon, the user can roll a second attack dice and choose which to use. If it is an item, the user can roll a second dice when hit and choose which dice the attack used.", 
	descriptionFull : "You touch a weapon or worn item and imbue luck into it. If imbued on a weapon, for the duration, on an attack roll, the wielder can roll an additional d20 (they can choose to do this after they roll, but before the outcome is determined). The creature can choose which of the d20s is used for the attack roll."+"\n"+"If imbued into a worn item, they can roll a d20 when attacked, then choose whether the attack uses the attacker's roll or theirs."+"\n"+"With either use, the spell immediately ends upon rolling the extra d20.",
	ritual : false, //Optional; Whether (true) or not (false) this spell is a ritual
	dependencies : [], //Optional; An array of spells (SpellsList object names) that will be put in the rows below this spell when this spell is added to the spell sheet
};