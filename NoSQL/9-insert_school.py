#!/usr/bin/env python3
"""
function that inserts a new document in a collection based on kwargs
"""
import pymongo


def insert(mognocollection, **kwargs):
    """
    function that inserts a new document in a collection based on kwargs
    """
    return mognocollection.insert_one(kwargs).insert_id
