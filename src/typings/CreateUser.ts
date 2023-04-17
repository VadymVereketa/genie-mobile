export type CreateUser = {
  fullname: string;
  email: string;
  password: string;
};
export type LoginUser = Omit<CreateUser, 'fullname'>;

export type User = {
  userID: string;
  fullName: string;
  email: string;
  budget?: string;
  skinType?: string;
  skinIssues?: string[];
  allergies?: string[];
  shoppingPreference?: string;
  undertone?: string;
  likedBrands?: string[];
  dislikedBrands?: string[];
  likeBrandReasons?: string[];
  dislikeBrandReasons?: string[];
  completeOnboarding?: boolean;
};
export type ResponseCreateUser = {
  ok: User;
};

export type PropertyOfUser =
  | 'dateofbirth'
  | 'skin_type'
  | 'skin_issue'
  | 'allergy'
  | 'shopping_preference'
  | 'undertone'
  | 'budget'
  | 'name'
  | 'email'
  | 'liked_brands'
  | 'disliked_brands'
  | 'why_dislike'
  | 'why_like';

export const getPropertyKeyByReduxKey: (
  path: string,
) => PropertyOfUser | null = (path: string) => {
  const [_, key] = path.split('.');

  switch (key) {
    case 'budget':
      return 'budget';
    case 'shop':
      return 'shopping_preference';
    case 'skinType':
      return 'skin_type';
    case 'skinIssues':
      return 'skin_issue';
    case 'allergies':
      return 'allergy';
    case 'undertoneType':
      return 'undertone';
    case 'brandsLikes':
      return 'liked_brands';
    case 'brandsDislikes':
      return 'disliked_brands';
    case 'whyLikes':
      return 'why_like';
    case 'whyDislikes':
      return 'why_dislike';
    default:
      return null;
    /*; */
  }
};

export const getKeyByPropertyOfUser: (
  type: PropertyOfUser,
) => string = type => {
  let key = '';
  switch (type) {
    case 'dateofbirth':
      key = 'dateOfBirth';
      break;
    case 'skin_type':
      key = 'skinType';
      break;
    case 'skin_issue':
      key = 'skinIssue';
      break;
    case 'allergy':
      key = 'allergy';
      break;
    case 'shopping_preference':
      key = 'shoppingPreference';
      break;
    case 'undertone':
      key = 'undertone';
      break;
    case 'liked_brands':
      key = 'likedBrands';
      break;
    case 'disliked_brands':
      key = 'dislikedBrands';
      break;
    case 'name':
      key = 'name';
      break;
    case 'email':
      key = 'email';
      break;
    case 'budget':
      key = 'budget';
      break;
    case 'why_like':
      key = 'likeReasons';
      break;
    case 'why_dislike':
      key = 'dislikeReasons';
      break;
  }
  return key;
};

export type UpdatePropertyOfUser = {
  type: PropertyOfUser;
  value: string | string[];
};
