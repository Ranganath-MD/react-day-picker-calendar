export const dateStyle = {
    fontSize: 20,
    fontWeight: "bold",
  };

export const birthdayStyle = { 
  color: "maroon",
  fontSize: '0.8em', 
  textAlign: 'left' 
};

export const cellStyle = {
  height: 40,
  width: 70,
  padding: 10
};

export const modifiers = {
    today: new Date(),
    disable: {
      before: new Date()
    }
};

export const modifiersStyles = {
  today: {
    color: '#ffc107',
    backgroundColor: '#fffdee',
    borderRadius: 5,
  },
  disable: {
    color: "gray"
  }

};
 