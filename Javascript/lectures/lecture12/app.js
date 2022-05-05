//================= Switch Statement =================
const day = 'Friday';

switch (day) {
	case 'Monday': // Performs a strict comparison - day === 'Monday' (Same for all the other cases)
		console.log('Study German');
        break;
	case 'Tuesday':
		console.log('Study guitar');
        break;
	case 'Wednesday':
		console.log('Read a book');
        break;
	case 'Thursday':
		console.log('Go swimming');
		break;
	case 'Friday':
		console.log('Chill');
        break;
	case 'Saturday':
    case 'Sunday':
		console.log('Do the laundry');
		console.log('Buy some groceries');
        break;
    default:
        console.log('Not a day on earth');
}


if (day === 'Monday') {
    console.log('Study German')
} else if (day === 'Tuesday') {
    console.log('Study guitar')
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log('Read a book')
} else if (day === 'Friday' || day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy your weekend');
} else {
    console.log('Not a valid day on earth');
}

