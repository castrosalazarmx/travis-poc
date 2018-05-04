const incorrectData = [
  { user: 'Test', pass: 'Test' },
  { user: 'Test', pass: ' '    },
  { user: ' '   , pass: 'Test' },
  { user: ' '   , pass: ' '    }
];

const correctData =
  { user: 'testuser@example.com', pass: 'test123' }


export { incorrectData }
export { correctData }
