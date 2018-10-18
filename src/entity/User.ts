type Props = {
  name: string;
  thumbnail: string | null;
}

class User {
  name: string;
  thumbnail: string | null;

  constructor({ name, thumbnail }: Props = { name: '', thumbnail: null }) {
    this.name = name;
    this.thumbnail = thumbnail;
  }
}

export default User;