import sum from './sum';
import * as emailUtil from './email-util/emailUtil';

test('adds 1+2 to equal 3', () => {
    // Arrange
    const spy = jest.spyOn(emailUtil, "sendEmail");

    // Act
    const result = sum(1, 2);

    // Assert
    expect(result).toBe(3);
    expect(spy).toHaveBeenCalled();
});
