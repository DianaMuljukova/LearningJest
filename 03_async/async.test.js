const Ajax = require("./async");
const axios = require('axios');

jest.mock('axios');

describe('Ajax.echo', () => {
    test('should return value async', async () => {
       const result = await Ajax.echo('some data');
       expect(result).toBe('some data')
    });
    test('should catch error', async () => {
        try {
            await Ajax.echo();
        } catch (e) {
            expect(e.message).toBe('error')
        }
    })
});

describe('Ajax: GET', () => {

    let response;
    let todos;

    beforeEach(() => {
        todos = [
            {id:1, title: 'todo'}
        ];
        response = {
            data: {
                todos
            }
        }
    });

    test('should return data from backend',  () => {
      axios.get.mockReturnValue(response);

      return Ajax.get().then(data => {
          expect(data.todos).toEqual(todos)
      })
    });
});