from functools import reduce
from typing import List, Callable, TypeVar

# def apply(num, f):
#     return f(num)


# print(apply(5, lambda num: 2 * num))

dollars = ['32$', '15$', '12$', '17$', '20$']

prices = map(lambda dollar: int(dollar[0:-1]), dollars)
print('Prices', list(prices))
expensive = filter(lambda price: price >= 20, prices)
print('Expensive', list(expensive))
total = reduce(lambda acum, price: acum + price, expensive, 0)
print('Total', total)

E = TypeVar('E')
R = TypeVar('R')
A = TypeVar('A')


def map(iterable: List[E], function: Callable[[E], R]) -> List[R]:
    mapped: List[R] = []
    for e in iterable:
        mapped.append(function(e))
    return mapped


def filter(iterable: List[E], function: Callable[[E], bool]) -> List[E]:
    filterd: List[E] = []
    for e in iterable:
        if (function(e)):
            filterd.append(e)
    return filterd


def reduce(iterable: List[E], function: Callable[[A, E], A], acum: A) -> A:
    for e in iterable:
        acum = function(acum, e)
    return acum


prices = map(dollars, lambda dollar: int(dollar[0:-1]))
print('Prices', prices)
expensive = filter(prices, lambda price: price >= 20)
print('Expensive', expensive)
total = reduce(expensive, lambda acum, price: acum + price, 0)
print('Total', total)
