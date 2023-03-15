import { expect, test } from 'vitest';
import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/svelte';
import MyComponent from './MyComponent.svelte';

test('toggling an element with a transition', async () => {
	console.log(window.requestAnimationFrame);
	
	const { getByTestId, queryByTestId } = render(MyComponent);

	expect(queryByTestId('paragraph')).toBeNull();

	await fireEvent.click(getByTestId('button'));

	expect(queryByTestId('paragraph')).not.toBeNull();

	await fireEvent.click(getByTestId('button'));

	await waitForElementToBeRemoved(() => queryByTestId('paragraph'));

	expect(queryByTestId('paragraph')).toBeNull();
});
