#!/usr/bin/env python3
"""
function that lists all documents in a collection
"""
import pymongo


def list_all(mongo_collection):
    """
    function that lists all documents in a collection
    """
    listadocs = mongo_collection.find()
    if listadocs is None:
        return []
    return listadocs
