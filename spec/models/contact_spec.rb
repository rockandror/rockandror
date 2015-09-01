describe Contact do

  let!(:contact) { Contact.new(name: "Name", email: "email@example.com", message: "message") } 

  subject { contact }

  it { should be_valid }

  it 'is invalid without a user name' do
    contact.name = ""
    expect(contact).to be_invalid
  end

  it 'is invalid without a user email' do
    contact.email = ""
    expect(contact).to be_invalid
  end  

  it 'is invalid without a user message' do
    contact.message = ""
    expect(contact).to be_invalid
  end        

  it 'is invalid without wrong email' do
    contact.email = "email@example."
    expect(contact).to be_invalid
  end          

end