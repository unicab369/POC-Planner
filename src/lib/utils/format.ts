export function formatDate(dateStr: string): string {
	const date = new Date(dateStr + 'T00:00:00');
	return date.toLocaleDateString('en-US', {
		weekday: 'short',
		month: 'short',
		day: 'numeric'
	});
}

export function formatDateRange(start: string, end: string): string {
	const s = new Date(start + 'T00:00:00');
	const e = new Date(end + 'T00:00:00');
	const startStr = s.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
	const endStr = e.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
	return `${startStr} – ${endStr}`;
}

export function formatCurrency(amount: number, currency = 'JPY'): string {
	if (amount === 0) return 'Free';
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(amount);
}

export function formatTime(timeStr: string): string {
	// Handle both "HH:MM" and ISO datetime strings
	if (timeStr.includes('T')) {
		const date = new Date(timeStr);
		return date.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: '2-digit',
			hour12: true
		});
	}
	const [hours, minutes] = timeStr.split(':').map(Number);
	const period = hours >= 12 ? 'PM' : 'AM';
	const displayHour = hours % 12 || 12;
	return `${displayHour}:${minutes.toString().padStart(2, '0')} ${period}`;
}

export function getDayOfWeek(dateStr: string): string {
	const date = new Date(dateStr + 'T00:00:00');
	return date.toLocaleDateString('en-US', { weekday: 'long' });
}
