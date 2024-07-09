#!/usr/bin/env python3
"""
function that lists all documents in a collection
"""
import pymongo


def listaall(mognocollection):
    """
    function that lists all documents in a collection
    """
    listadocs = mognocollection.find()
    if listadocs is None:
        return []
    return listadocs
