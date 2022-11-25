import { expect, test } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import MyComponent from './MyComponent.svelte';

test('toggling an element with a transition', async () => {
	const { getByTestId, queryByTestId } = render(MyComponent);

	expect(queryByTestId('paragraph')).toBeNull();

	await fireEvent.click(getByTestId('button'));

	expect(queryByTestId('paragraph')).not.toBeNull();

	await fireEvent.click(getByTestId('button'));

	expect(queryByTestId('paragraph')).toBeNull();
});
