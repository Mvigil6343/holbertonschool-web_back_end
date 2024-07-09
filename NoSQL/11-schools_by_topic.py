#!/usr/bin/env python3
"""
function that returns the list of school having a specific topic
"""
import pymongo


def schoolbytopic(mognocollection, topic):
    """
    function that returns the list of school having a specific topic
    """
    return mognocollection.find({"topics": topic})
