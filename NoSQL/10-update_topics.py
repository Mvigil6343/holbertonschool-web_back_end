#!/usr/bin/env python3
"""
function that changes all topics of a school document based on the name
"""
import pymongo


def update(mognocollection, name, topics):
    """
    function that changes all topics of a school document based on the name
    """
    mognocollection.update_many({"name": name}, {"$set": {"topics": topics}})
