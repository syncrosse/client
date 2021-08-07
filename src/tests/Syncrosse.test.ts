import { Syncrosse } from '../index';

describe('Syncrosse', () => {
  it('should not return null', () => {
    const client = new Syncrosse();

    expect(client).not.toBeNull();
  });
});
