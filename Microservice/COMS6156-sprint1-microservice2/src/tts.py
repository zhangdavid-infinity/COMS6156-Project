import json
from shop_resource import ArtistResource


def t1():

    res = ArtistResource.get_by_key('nm0000158')
    print(json.dumps(res, indent=2, default=str))


if __name__ == "__main__":
    print("\n\n Use test_rest.py instead of this file. \n\n")
    t1()
