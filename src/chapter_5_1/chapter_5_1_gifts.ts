import { endAdventure } from '../../index';
import { wakeUp } from '../chapter_6/chapter_6_wake_up';
import { askQuestion, clear, print } from '../ui/console';


interface Giftinfo {
	name: string;
	awarded: boolean;
}

export function gifts(): void {
	clear(true);
	print('The Queen has announced the gifts.');

	let giftReceived: boolean = false;

	let giftItems: Giftinfo[] = giftsList(); // 👉 FIXME ❌ - call getWitnesses here

	if (!giftItems || giftItems.length === 0) {
		print(`your name is not on the list.`);
		giftReceived = false;
	}

	let giftsCount = 0;

	giftItems.forEach((gift) => {
		
		print(
			`Awarded the ${gift.name} to you: ${gift.awarded}`
		);
		if (gift.awarded === true) {
			giftsCount++;
			giftReceived = true;
		}
	});

	if (giftsCount < 1 || giftReceived===false) {
		print(`You have not received any gifts from QUEEN! "return sadly!" 😭`);
		return endAdventure();
	} else {
		print(`You have been awarded gifts from QUEEN! Thank goodness. 🥳`);
		print('Time to wake up...');
		return askQuestion('Press ENTER to continue! ', wakeUp);
		
	}
}

// 👉 FIXME ❌ - this function needs writing to meet the above criteria
function giftsList(): any {
	return [{
		name: 'Sword',
		awarded: false
	},
	{
		name: 'Diamond',
		awarded: true
	},
	];
}
